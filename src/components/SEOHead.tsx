import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = 'Vanshu Aggarwal - Professional Video Editor & Content Creator',
  description = 'Professional video editing services specializing in gaming montages, YouTube content, music videos, and tutorials. Transform your raw footage into engaging content.',
  keywords = 'video editor, video editing services, gaming montage, YouTube editor, content creator, Adobe Premiere Pro, After Effects, music video editing',
  ogImage = 'https://i.postimg.cc/d3xjhmn2/IMG-20250316-WA0005.jpg',
  ogType = 'website',
  canonicalUrl,
  structuredData,
}: SEOHeadProps) => {
  const location = useLocation();
  const siteUrl = window.location.origin;
  const fullUrl = canonicalUrl || `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Set title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Vanshu Aggarwal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: 'Vanshu Aggarwal' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:creator', content: '@vanshuaggarwal' },
      
      // Mobile
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
      { name: 'theme-color', content: '#3b82f6' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Vanshu Aggarwal' },
      { name: 'format-detection', content: 'telephone=yes' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Preconnect to external domains
    const preconnects = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://wa.me',
    ];

    preconnects.forEach(url => {
      let link = document.querySelector(`link[href="${url}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'preconnect');
        link.setAttribute('href', url);
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, ogImage, ogType, fullUrl, structuredData]);

  return null;
};

export default SEOHead;
