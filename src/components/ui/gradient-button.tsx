import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const GradientButton = ({
  to,
  href,
  children,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: GradientButtonProps) => {
  const buttonContent = (
    <span className="gradient-text-rainbow">{children}</span>
  );

  if (to) {
    return (
      <Link to={to} className={cn('gradient-button', className)}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('gradient-button', className)}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn('gradient-button', disabled && 'opacity-50 cursor-not-allowed', className)}
    >
      {buttonContent}
    </button>
  );
};

export { GradientButton };
