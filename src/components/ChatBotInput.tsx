import { useState, useRef } from 'react';
import { Loader2, Send, Mic, MicOff } from 'lucide-react';
import './ChatBotInput.css';

interface ChatBotInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  placeholder?: string;
  suggestedTags?: string[];
  onTagClick?: (tag: string) => void;
  showTags?: boolean;
}

const ChatBotInput = ({
  value,
  onChange,
  onSubmit,
  isLoading,
  placeholder = "Ask me anything...",
  suggestedTags = ["Create An Image", "Analyse Data", "More"],
  onTagClick,
  showTags = false,
}: ChatBotInputProps) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || isLoading) return;
    onSubmit(e);
  };

  const toggleVoiceInput = () => {
    const win = window as any;
    if (!win.webkitSpeechRecognition && !win.SpeechRecognition) {
      alert('Voice input is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognitionAPI = win.SpeechRecognition || win.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionAPI();
    recognitionRef.current = recognition;
    
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join('');
      onChange(transcript);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  return (
    <div className="container_chat_bot">
      <div className="container-chat-options">
        <div className="chat">
          <form onSubmit={handleSubmit} className="chat-bot">
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              disabled={isLoading}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
          </form>
          <div className="options">
            <div className="btns-add">
              <button 
                type="button" 
                onClick={toggleVoiceInput}
                className={`voice-btn ${isListening ? 'listening' : ''}`}
                aria-label={isListening ? "Stop listening" : "Start voice input"}
              >
                {isListening ? (
                  <MicOff className="w-5 h-5" />
                ) : (
                  <Mic className="w-5 h-5" />
                )}
              </button>
            </div>
            <button 
              className="btn-submit" 
              onClick={handleSubmit}
              disabled={isLoading || !value.trim()}
              type="submit"
              aria-label="Send message"
            >
              <i>
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </i>
            </button>
          </div>
        </div>
      </div>
      {showTags && suggestedTags.length > 0 && (
        <div className="tags">
          {suggestedTags.map((tag, index) => (
            <span 
              key={index} 
              onClick={() => onTagClick?.(tag)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onTagClick?.(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatBotInput;
