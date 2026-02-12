import './SquidLoader.css';

const SquidLoader = () => {
  return (
    <div className="squid-loader-container">
      <div className="squid-loader">
        <svg viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="32" />
        </svg>
      </div>
      <div className="squid-loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72" />
        </svg>
      </div>
      <div className="squid-loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64" />
        </svg>
      </div>
    </div>
  );
};

export default SquidLoader;
