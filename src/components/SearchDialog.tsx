import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const searchableContent = [
    { title: 'Home', path: '/', keywords: ['home', 'main', 'landing'] },
    { title: 'About Me', path: '/about', keywords: ['about', 'bio', 'profile', 'story'] },
    { title: 'Portfolio', path: '/portfolio', keywords: ['portfolio', 'projects', 'work', 'gallery'] },
    { title: 'Skills', path: '/skills', keywords: ['skills', 'expertise', 'abilities'] },
    { title: 'Contact', path: '/contact', keywords: ['contact', 'email', 'reach', 'message'] },
    { title: 'YouTube Videos', path: '/youtube', keywords: ['youtube', 'videos', 'channel'] },
    { title: 'Vanshu Bot', path: '/vanshu-bot', keywords: ['bot', 'chat', 'ai', 'assistant'] },
    { title: 'CV / Resume', path: '/cv', keywords: ['cv', 'resume', 'download'] },
    { title: 'Articles', path: '/articles', keywords: ['articles', 'blog', 'posts', 'insights'] },
    { title: 'Process & Workflow', path: '/process', keywords: ['process', 'workflow', 'how', 'work'] },
    { title: 'Book a Session', path: '/booking', keywords: ['book', 'booking', 'appointment', 'schedule'] },
    { title: 'Privacy Policy', path: '/privacy-policy', keywords: ['privacy', 'policy', 'data'] },
    { title: 'Terms & Conditions', path: '/terms', keywords: ['terms', 'conditions', 'legal'] }
  ];

  const filteredResults = searchQuery.trim()
    ? searchableContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const handleResultClick = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <DialogHeader className="px-4 pt-4 pb-0">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pages... (Ctrl+K)"
              className="pl-10 pr-10 h-12 text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </DialogHeader>

        <div className="max-h-96 overflow-y-auto p-4">
          {searchQuery.trim() === '' ? (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>Start typing to search pages...</p>
              <p className="text-sm mt-2">Try "portfolio", "contact", or "articles"</p>
            </div>
          ) : filteredResults.length > 0 ? (
            <div className="space-y-2">
              {filteredResults.map((result) => (
                <button
                  key={result.path}
                  onClick={() => handleResultClick(result.path)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-smooth flex items-center justify-between group"
                >
                  <span className="font-medium group-hover:text-primary transition-smooth">
                    {result.title}
                  </span>
                  <span className="text-sm text-muted-foreground">{result.path}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No results found for "{searchQuery}"</p>
              <p className="text-sm mt-2">Try a different search term</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
