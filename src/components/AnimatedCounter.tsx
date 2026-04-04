import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

const AnimatedCounter = ({ value, className = '' }: AnimatedCounterProps) => {
  const chars = value.split('');
  
  return (
    <span className={`inline-flex ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.08,
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedCounter;
