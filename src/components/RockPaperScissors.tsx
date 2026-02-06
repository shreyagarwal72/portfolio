import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RockPaperScissorsProps {
  isOpen: boolean;
  onClose: () => void;
}

type Choice = 'rock' | 'paper' | 'scissors';
type GameResult = 'win' | 'lose' | 'draw' | null;

const choices: { name: Choice; emoji: string }[] = [
  { name: 'rock', emoji: '🪨' },
  { name: 'paper', emoji: '📄' },
  { name: 'scissors', emoji: '✂️' },
];

const RockPaperScissors = ({ isOpen, onClose }: RockPaperScissorsProps) => {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [cpuChoice, setCpuChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<GameResult>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState({ user: 0, cpu: 0 });

  const determineWinner = useCallback((user: Choice, cpu: Choice): GameResult => {
    if (user === cpu) return 'draw';
    if (
      (user === 'rock' && cpu === 'scissors') ||
      (user === 'paper' && cpu === 'rock') ||
      (user === 'scissors' && cpu === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  }, []);

  const playGame = useCallback((choice: Choice) => {
    if (isPlaying) return;
    
    setUserChoice(choice);
    setIsPlaying(true);
    setResult(null);
    setCpuChoice(null);

    // Simulate CPU thinking
    setTimeout(() => {
      const cpuRandomChoice = choices[Math.floor(Math.random() * 3)].name;
      setCpuChoice(cpuRandomChoice);
      
      const gameResult = determineWinner(choice, cpuRandomChoice);
      setResult(gameResult);
      
      if (gameResult === 'win') {
        setScore(prev => ({ ...prev, user: prev.user + 1 }));
      } else if (gameResult === 'lose') {
        setScore(prev => ({ ...prev, cpu: prev.cpu + 1 }));
      }
      
      setIsPlaying(false);
    }, 1500);
  }, [isPlaying, determineWinner]);

  const resetGame = () => {
    setUserChoice(null);
    setCpuChoice(null);
    setResult(null);
    setScore({ user: 0, cpu: 0 });
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const getResultText = () => {
    switch (result) {
      case 'win': return '🎉 You Won!';
      case 'lose': return '😢 CPU Wins!';
      case 'draw': return '🤝 Draw!';
      default: return isPlaying ? '🎲 Playing...' : '👆 Pick One!';
    }
  };

  const getResultColor = () => {
    switch (result) {
      case 'win': return 'text-green-500';
      case 'lose': return 'text-red-500';
      case 'draw': return 'text-yellow-500';
      default: return 'text-primary';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-gradient-to-br from-background via-background to-primary/5 rounded-3xl border border-primary/20 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <motion.h2 
                className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                🎮 Rock Paper Scissors
              </motion.h2>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={resetGame}
                  className="h-8 w-8 rounded-full"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Score */}
            <motion.div 
              className="flex justify-center gap-8 py-4 bg-muted/30"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-center">
                <p className="text-sm text-muted-foreground">You</p>
                <p className="text-2xl font-bold text-primary">{score.user}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">CPU</p>
                <p className="text-2xl font-bold text-accent">{score.cpu}</p>
              </div>
            </motion.div>

            {/* Battle Area */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                {/* User Choice */}
                <motion.div
                  className="flex flex-col items-center"
                  animate={isPlaying ? { rotate: [0, -20, 0] } : {}}
                  transition={{ repeat: isPlaying ? Infinity : 0, duration: 0.3 }}
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-4xl">
                    {userChoice ? choices.find(c => c.name === userChoice)?.emoji : '❓'}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">You</p>
                </motion.div>

                {/* VS */}
                <motion.div
                  className={`text-2xl font-bold ${getResultColor()}`}
                  key={result}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring' }}
                >
                  VS
                </motion.div>

                {/* CPU Choice */}
                <motion.div
                  className="flex flex-col items-center"
                  animate={isPlaying ? { rotate: [0, 20, 0] } : {}}
                  transition={{ repeat: isPlaying ? Infinity : 0, duration: 0.3 }}
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center text-4xl">
                    {cpuChoice ? choices.find(c => c.name === cpuChoice)?.emoji : '🤖'}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">CPU</p>
                </motion.div>
              </div>

              {/* Result Text */}
              <motion.p
                className={`text-center text-xl font-semibold mb-6 ${getResultColor()}`}
                key={getResultText()}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {getResultText()}
              </motion.p>

              {/* Choice Buttons */}
              <div className="flex justify-center gap-4">
                {choices.map((choice, index) => (
                  <motion.button
                    key={choice.name}
                    onClick={() => playGame(choice.name)}
                    disabled={isPlaying}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      w-20 h-20 rounded-2xl text-4xl
                      bg-gradient-to-br from-muted/50 to-muted/20
                      border-2 transition-all duration-200
                      ${userChoice === choice.name ? 'border-primary shadow-lg shadow-primary/20' : 'border-border/50'}
                      ${isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary/50 cursor-pointer'}
                      flex flex-col items-center justify-center
                    `}
                  >
                    <span>{choice.emoji}</span>
                    <span className="text-xs text-muted-foreground mt-1 capitalize">{choice.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Easter egg hint */}
            <motion.p
              className="text-center text-xs text-muted-foreground/50 pb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              🥚 You found the secret game!
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RockPaperScissors;
