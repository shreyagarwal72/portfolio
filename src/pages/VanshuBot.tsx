import { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, Sparkles, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const VanshuBot = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m Vanshu Bot, your AI assistant. I can help you learn about Vanshu Aggarwal\'s work, skills, and projects. What would you like to know?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const renderMessageContent = (content: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    
    // Match **text** or *text* patterns
    const boldPattern = /(\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
    let match;
    let key = 0;
    
    while ((match = boldPattern.exec(content)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index));
      }
      
      // Add bold text
      const boldText = match[2] || match[3]; // match[2] for **, match[3] for *
      parts.push(<strong key={key++}>{boldText}</strong>);
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : content;
  };

  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = 'Vanshu Bot - AI Assistant | Ask About Vanshu Aggarwal';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Chat with Vanshu Bot, an AI assistant with complete knowledge about Vanshu Aggarwal\'s video editing services, portfolio projects, skills, and experience. Get instant answers to your questions.');
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Vanshu Bot",
      "description": "AI chatbot assistant with comprehensive knowledge about Vanshu Aggarwal's work",
      "applicationCategory": "ChatApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "creator": {
        "@type": "Person",
        "name": "Vanshu Aggarwal"
      }
    });
    document.head.appendChild(script);

    // Check if user has seen terms dialog
    const hasSeenTerms = localStorage.getItem('vanshubot_terms_accepted');
    if (!hasSeenTerms) {
      setShowTermsDialog(true);
    }
    
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    // Skip scrolling on initial mount (when only welcome message exists)
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const suggestedQuestions = [
    "What services does Vanshu offer?",
    "Tell me about Vanshu's portfolio projects",
    "What are Vanshu's video editing skills?",
    "How can I contact Vanshu?",
    "What software does Vanshu use?",
    "Tell me about Vanshu's experience"
  ];

  const streamChat = async (userMessage: Message) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
    
    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!resp.ok) {
        if (resp.status === 429) {
          toast({
            title: 'Rate Limit',
            description: 'Too many requests. Please try again later.',
            variant: 'destructive',
          });
          return;
        }
        if (resp.status === 402) {
          toast({
            title: 'Service Unavailable',
            description: 'AI service requires payment. Please contact support.',
            variant: 'destructive',
          });
          return;
        }
        throw new Error('Failed to start stream');
      }

      if (!resp.body) throw new Error('No response body');

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let streamDone = false;
      let assistantContent = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: 'assistant',
                  content: assistantContent,
                };
                return newMessages;
              });
            }
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

      if (textBuffer.trim()) {
        for (let raw of textBuffer.split('\n')) {
          if (!raw || raw.startsWith(':') || raw.trim() === '') continue;
          if (!raw.startsWith('data: ')) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === '[DONE]') continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: 'assistant',
                  content: assistantContent,
                };
                return newMessages;
              });
            }
          } catch { /* ignore */ }
        }
      }
    } catch (error) {
      console.error('Error streaming chat:', error);
      toast({
        title: 'Error',
        description: 'Failed to get response. Please try again.',
        variant: 'destructive',
      });
      setMessages(prev => prev.slice(0, -1));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Check for clear chat command
    const clearPhrases = ['clear chat', 'clear history', 'reset chat', 'new chat', 'start over'];
    if (clearPhrases.some(phrase => input.toLowerCase().includes(phrase))) {
      setMessages([
        {
          role: 'assistant',
          content: 'Hi! I\'m Vanshu Bot, your AI assistant. I can help you learn about Vanshu Aggarwal\'s work, skills, and projects. What would you like to know?',
        },
      ]);
      setInput('');
      toast({
        title: 'Chat Cleared',
        description: 'Your chat history has been cleared.',
      });
      return;
    }

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    await streamChat(userMessage);
    setIsLoading(false);
  };

  const handleSuggestionClick = (question: string) => {
    setInput(question);
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Hi! I\'m Vanshu Bot, your AI assistant. I can help you learn about Vanshu Aggarwal\'s work, skills, and projects. What would you like to know?',
      },
    ]);
    toast({
      title: 'Chat Cleared',
      description: 'Your chat history has been cleared.',
    });
  };

  const handleAcceptTerms = () => {
    localStorage.setItem('vanshubot_terms_accepted', 'true');
    setShowTermsDialog(false);
  };

  return (
    <main className="min-h-screen pt-16 bg-background pb-32" role="main">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 animate-pulse" aria-hidden="true">
            <Bot className="w-8 h-8 text-primary" aria-label="AI Bot Icon" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Vanshu Bot
          </h1>
          <p className="text-muted-foreground">
            Your AI assistant with complete knowledge about Vanshu Aggarwal's work
          </p>
          <Button
            onClick={handleClearChat}
            variant="outline"
            size="sm"
            className="mt-4 hover:bg-destructive hover:text-destructive-foreground transition-smooth"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Chat
          </Button>
        </header>

        {/* Terms Dialog */}
        <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Welcome to Vanshu Bot
              </DialogTitle>
              <DialogDescription className="text-base pt-4 space-y-4">
                <p>
                  By using Vanshu Bot, you agree to our Terms and Conditions. This AI assistant provides information about 
                  Vanshu Aggarwal's work and uses AI technology to respond to your questions.
                </p>
                <p>
                  Your conversations are processed securely and are not stored permanently. For more details, please read our{' '}
                  <Link 
                    to="/terms" 
                    className="text-primary hover:text-primary-glow underline font-medium transition-smooth"
                    onClick={() => setShowTermsDialog(false)}
                  >
                    full Terms and Conditions
                  </Link>.
                </p>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-center">
              <Button
                onClick={handleAcceptTerms}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                I Agree
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <section className="mb-6 animate-fade-in transition-smooth" aria-label="Suggested questions">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
              <h2 className="text-sm font-medium text-muted-foreground">Suggested Questions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(question)}
                  className="text-left p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-card-hover transition-smooth text-sm text-muted-foreground hover:text-foreground hover:scale-105 hover:-translate-y-1"
                >
                  {question}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Chat Messages */}
        <section className="card-gradient rounded-xl border border-border overflow-hidden mb-4 animate-fade-in transition-smooth" aria-label="Chat conversation">
          <ScrollArea className="h-[calc(100vh-400px)] min-h-[400px] p-6" ref={scrollRef}>
            <div className="space-y-4" role="log" aria-live="polite" aria-atomic="false">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {renderMessageContent(message.content)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </section>

        {/* Info */}
        <div className="text-center text-xs text-muted-foreground mb-2">
          <p>Powered by Lovable AI • Free Gemini models</p>
        </div>
      </div>

      {/* Fixed Chat Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Vanshu's work..."
              disabled={isLoading}
              className="flex-1 bg-background"
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              size="icon"
              className="shrink-0"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default VanshuBot;
