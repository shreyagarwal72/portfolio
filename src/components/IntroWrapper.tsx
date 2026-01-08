import { useState, useEffect } from 'react';
import Intro from '@/pages/Intro';

interface IntroWrapperProps {
  children: React.ReactNode;
  forceShowIntro?: boolean;
  onIntroComplete?: () => void;
}

const INTRO_SEEN_KEY = 'hasSeenIntro';

const IntroWrapper = ({ children, forceShowIntro, onIntroComplete }: IntroWrapperProps) => {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has seen intro before
    const hasSeenIntro = localStorage.getItem(INTRO_SEEN_KEY);
    
    if (forceShowIntro) {
      setShowIntro(true);
    } else {
      setShowIntro(!hasSeenIntro);
    }
  }, [forceShowIntro]);

  const handleEnter = () => {
    localStorage.setItem(INTRO_SEEN_KEY, 'true');
    setShowIntro(false);
    onIntroComplete?.();
  };

  // Still loading
  if (showIntro === null) {
    return null;
  }

  if (showIntro) {
    return <Intro onEnter={handleEnter} />;
  }

  return <>{children}</>;
};

export default IntroWrapper;

// Export function to trigger intro replay
export const triggerIntroReplay = (callback: () => void) => {
  localStorage.removeItem(INTRO_SEEN_KEY);
  callback();
};
