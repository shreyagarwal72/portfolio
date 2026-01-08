import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const SOUND_ENABLED_KEY = 'soundEnabled';

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const stored = localStorage.getItem(SOUND_ENABLED_KEY);
    return stored !== 'false'; // Default to true
  });

  useEffect(() => {
    localStorage.setItem(SOUND_ENABLED_KEY, String(soundEnabled));
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
