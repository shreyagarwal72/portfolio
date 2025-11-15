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
    <main className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden" role="main">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <article className="text-center space-y-8 p-8 relative z-10 max-w-2xl">
        <header className="space-y-4">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-fade-in">
            404
          </h1>
          <p className="text-3xl font-semibold text-foreground animate-fade-in">Oops! Page Not Found</p>
        </header>
        
        <div className="space-y-4 animate-fade-in">
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="card-gradient rounded-lg p-6 backdrop-blur-sm max-w-md mx-auto">
            <p className="text-lg font-medium mb-4">Here's what you can do:</p>
            <ul className="space-y-2 text-left text-muted-foreground">
              <li>• Check the URL for typos</li>
              <li>• Return to the homepage</li>
              <li>• Browse my portfolio</li>
              <li>• Contact me if you need help</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-smooth shadow-glow hover-scale"
            aria-label="Return to homepage"
          >
            Return to Home
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-background/50 hover:bg-background/70 text-foreground font-medium rounded-lg transition-smooth border border-border hover-scale"
            aria-label="Contact page"
          >
            Contact Me
          </a>
        </div>
      </article>
    </main>
  );
};

export default NotFound;
