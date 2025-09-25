'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import RootFooter from "@/components/RootFooter";
import ParallaxGlobe from "@/components/ParallaxGlobe";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isPolicyPage = pathname.startsWith('/policies');

  // Handle page navigation loading
  useEffect(() => {
    const handleRouteChangeStart = () => setIsLoading(true);
    const handleRouteChangeComplete = () => setIsLoading(false);
    const handleRouteChangeError = () => setIsLoading(false);

    // Listen to route changes
    window.addEventListener('beforeunload', handleRouteChangeStart);
    
    // Simulate route changes for logo clicks and internal links
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && target.href.startsWith(window.location.origin)) {
        // Don't show loading for anchor links (table of contents)
        const isAnchorLink = target.href.includes('#') && 
                            target.href.replace(/#.*$/, '') === window.location.href.replace(/#.*$/, '');
        if (!isAnchorLink) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Auto-hide loading after 500ms (fallback)
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      {!isPolicyPage && <ParallaxGlobe />}
      <div className={!isPolicyPage ? "pt-20" : ""}>
        {children}
      </div>
      <div className={isPolicyPage ? "bg-black" : "relative w-full"}>
        {!isPolicyPage && (
          <div className="absolute inset-0 -z-10">
            <img
              src="/moonrise.webp"
              alt="Moonrise"
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}
        {pathname === '/' ? <RootFooter /> : <Footer />}
      </div>
    </>
  );
}
