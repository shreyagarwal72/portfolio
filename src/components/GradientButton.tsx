import { Link } from 'react-router-dom';
import './GradientButton.css';

interface GradientButtonProps {
  to: string;
  text: string;
}

const GradientButton = ({ to, text }: GradientButtonProps) => {
  return (
    <Link to={to} className="gradient-button">
      <span className="gradient-text">{text}</span>
    </Link>
  );
};

export default GradientButton;