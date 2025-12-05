import './TextLoader.css';

interface TextLoaderProps {
  text?: string;
  className?: string;
}

const TextLoader = ({ text = "Loading", className = "" }: TextLoaderProps) => {
  return (
    <div className={`loader ${className}`}>
      {[...Array(9)].map((_, i) => (
        <div key={i} className="text">
          <span>{text}</span>
        </div>
      ))}
      <div className="line"></div>
    </div>
  );
};

export default TextLoader;
