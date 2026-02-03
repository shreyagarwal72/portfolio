import { useCallback, useRef, useEffect } from 'react';
import { useSound } from '@/contexts/SoundContext';

// Sound URLs - using Web Audio API for better performance
const SOUND_URLS = {
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  hover: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  success: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
  transition: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
};

type SoundType = keyof typeof SOUND_URLS;

export const useSoundEffect = () => {
  const { soundEnabled } = useSound();
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBuffersRef = useRef<Map<SoundType, AudioBuffer>>(new Map());
  const loadedRef = useRef(false);

  // Initialize AudioContext and preload sounds
  useEffect(() => {
    if (loadedRef.current || typeof window === 'undefined') return;

    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Preload all sounds
        const loadPromises = Object.entries(SOUND_URLS).map(async ([key, url]) => {
          try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioContextRef.current!.decodeAudioData(arrayBuffer);
            audioBuffersRef.current.set(key as SoundType, audioBuffer);
          } catch (e) {
            console.warn(`Failed to load sound: ${key}`);
          }
        });

        await Promise.all(loadPromises);
        loadedRef.current = true;
      } catch (e) {
        console.warn('Web Audio API not supported');
      }
    };

    // Only init on user interaction
    const initOnInteraction = () => {
      initAudio();
      document.removeEventListener('click', initOnInteraction);
      document.removeEventListener('touchstart', initOnInteraction);
    };

    document.addEventListener('click', initOnInteraction);
    document.addEventListener('touchstart', initOnInteraction);

    return () => {
      document.removeEventListener('click', initOnInteraction);
      document.removeEventListener('touchstart', initOnInteraction);
    };
  }, []);

  const playSound = useCallback((type: SoundType, volume = 0.3) => {
    if (!soundEnabled || !audioContextRef.current || !loadedRef.current) return;

    const buffer = audioBuffersRef.current.get(type);
    if (!buffer) return;

    try {
      // Resume context if suspended
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      const source = audioContextRef.current.createBufferSource();
      const gainNode = audioContextRef.current.createGain();
      
      source.buffer = buffer;
      gainNode.gain.value = volume;
      
      source.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      
      source.start(0);
    } catch (e) {
      console.warn('Failed to play sound');
    }
  }, [soundEnabled]);

  return { playSound, soundEnabled };
};

export default useSoundEffect;
