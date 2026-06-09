import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const HOLD_DURATION = 5000;

/**
 * Long-press the VA logo for 5 seconds (mobile-friendly) to unlock the
 * Subway Surfers easter egg. Returns handlers + progress (0-1).
 */
export const useLogoLongPress = () => {
  const navigate = useNavigate();
  const startedAt = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);
  const timerId = useRef<number | null>(null);
  const triggered = useRef(false);
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);

  const clear = useCallback(() => {
    if (timerId.current) window.clearTimeout(timerId.current);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    timerId.current = null;
    rafId.current = null;
    startedAt.current = null;
    setProgress(0);
    setHolding(false);
  }, []);

  const tick = useCallback(() => {
    if (startedAt.current == null) return;
    const elapsed = performance.now() - startedAt.current;
    setProgress(Math.min(1, elapsed / HOLD_DURATION));
    if (elapsed < HOLD_DURATION) {
      rafId.current = requestAnimationFrame(tick);
    }
  }, []);

  const start = useCallback(
    (e: React.PointerEvent) => {
      // Only main button / touch / pen
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      triggered.current = false;
      startedAt.current = performance.now();
      setHolding(true);
      rafId.current = requestAnimationFrame(tick);
      timerId.current = window.setTimeout(() => {
        triggered.current = true;
        if ('vibrate' in navigator) navigator.vibrate?.([40, 30, 80]);
        toast.success('🎮 Secret arcade unlocked!', { duration: 1500 });
        clear();
        setTimeout(() => navigate('/play/subway-surfers'), 350);
      }, HOLD_DURATION);
    },
    [clear, navigate, tick]
  );

  const cancel = useCallback(() => {
    if (!triggered.current) clear();
  }, [clear]);

  // Intercept the normal click ONLY if the long-press fired.
  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (triggered.current) {
      e.preventDefault();
      e.stopPropagation();
      triggered.current = false;
    }
  }, []);

  useEffect(() => () => clear(), [clear]);

  return {
    progress,
    holding,
    bind: {
      onPointerDown: start,
      onPointerUp: cancel,
      onPointerLeave: cancel,
      onPointerCancel: cancel,
      onContextMenu: (e: React.MouseEvent) => holding && e.preventDefault(),
      onClickCapture,
      style: { touchAction: 'manipulation' as const, WebkitUserSelect: 'none' as const, userSelect: 'none' as const },
    },
  };
};
