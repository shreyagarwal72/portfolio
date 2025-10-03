import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Set page title for SEO
    document.title = '404 - Page Not Found | Vanshu Agarwal';
    
    // Log error for debugging
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found. Return to Vanshu Agarwal\'s portfolio homepage to explore video editing projects, creative content, and more.');
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-2xl font-semibold text-foreground">Page Not Found</p>
        </div>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-smooth shadow-glow"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
