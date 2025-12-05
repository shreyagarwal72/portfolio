import { Loader2, Paperclip, Globe, LayoutGrid, Send } from 'lucide-react';
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || isLoading) return;
    onSubmit(e);
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
              <button type="button" aria-label="Attach file">
                <Paperclip className="w-5 h-5" />
              </button>
              <button type="button" aria-label="Add block">
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button type="button" aria-label="Web search">
                <Globe className="w-5 h-5" />
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
