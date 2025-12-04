import { Link } from 'react-router-dom';
import './ElectricButton.css';

interface ElectricButtonProps {
  to: string;
  text: string;
}

const ElectricButton = ({ to, text }: ElectricButtonProps) => {
  const letters = text.split('');

  return (
    <div className="electric-button-container">
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <div className="area"></div>
      <Link to={to} className="electric-button">
        <div className="base"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 52 42"
          height="25"
          width="50"
          className="filament"
        >
          <path
            strokeWidth="3"
            stroke="var(--filament)"
            d="M1 11.5153C10.1667 12.6819 30.7 14.8153 39.5 14.0153C48.3 13.2153 50.1667 10.3486 50 9.01525C49.8333 6.84859 48.6 2.41525 45 2.01525C41.4 1.61525 39.8333 9.18192 39.5 13.0153V29.5153C39.5 32.5153 42 40.0153 45 40.0153C48 40.0153 50 37.5153 50 35.5153C50 33.5153 47.7 29.0153 38.5 27.0153C29.3 25.0153 9.66667 27.8486 1 29.5153"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 42"
          height="25"
          width="50"
          className="filament filament-glow"
        >
          <defs>
            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--filament)"></stop>
              <stop offset="100%" stopColor="var(--filament)"></stop>
            </linearGradient>
          </defs>
          <path
            d="M1 11.5153C10.1667 12.6819 30.7 14.8153 39.5 14.0153C48.3 13.2153 50.1667 10.3486 50 9.01525C49.8333 6.84859 48.6 2.41525 45 2.01525C41.4 1.61525 39.8333 9.18192 39.5 13.0153V29.5153C39.5 32.5153 42 40.0153 45 40.0153C48 40.0153 50 37.5153 50 35.5153C50 33.5153 47.7 29.0153 38.5 27.0153C29.3 25.0153 9.66667 27.8486 1 29.5153"
          ></path>
        </svg>
        <div className="glow"></div>
        <div className="lightning-marquee">
          <div>
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 16 16" className="lightning" fill="var(--glow)" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
              </svg>
            ))}
          </div>
          <div>
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 16 16" className="lightning" fill="var(--glow)" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
              </svg>
            ))}
          </div>
        </div>
        <p className="electric-text">
          {letters.map((letter, i) => (
            <span key={i} style={{ '--i': i } as React.CSSProperties}>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </p>
      </Link>
      <div className="bulb-wrapper">
        <div className="bulb"></div>
      </div>
    </div>
  );
};

export default ElectricButton;
