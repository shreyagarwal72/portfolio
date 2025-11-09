import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimationData from "@/assets/loading-animation.json";

interface LoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
}

export default function LoadingAnimation({ onComplete, duration = 2000 }: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 300); // Wait for fade-out transition
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="w-64 h-64">
        <Lottie
          animationData={loadingAnimationData}
          loop={true}
          autoplay={true}
        />
      </div>
      <span className="sr-only">Loading, please wait...</span>
    </div>
  );
}
