import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkeletonCardProps {
  className?: string;
  rows?: number;
}

const SkeletonCard = ({ className, rows = 3 }: SkeletonCardProps) => {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-6", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-3"
      >
        {/* Image skeleton */}
        <div className="h-48 bg-muted rounded-md overflow-hidden relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Text skeleton */}
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 bg-muted rounded overflow-hidden relative",
              i === rows - 1 && "w-2/3"
            )}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
                delay: i * 0.1
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkeletonCard;
