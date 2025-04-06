import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  fallback?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animationDuration?: number;
  loadingClassName?: string;
  webpSrc?: string;
}

const OptimizedImage = ({
  src,
  alt,
  placeholderSrc = '/placeholder.svg',
  fallback,
  className,
  containerClassName,
  animationDuration = 500,
  loadingClassName,
  webpSrc,
  ...props
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setImgSrc(placeholderSrc || src);
    setIsLoaded(false);
    setError(false);

    // Use the lower quality placeholder while the main image loads
    if (placeholderSrc && placeholderSrc !== '/placeholder.svg') {
      const placeholder = new Image();
      placeholder.src = placeholderSrc;
      placeholder.onload = () => {
        setImgSrc(placeholderSrc);
      };
    }

    // Then load the main image
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };

    img.onerror = () => {
      setError(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, placeholderSrc]);

  if (error && fallback) {
    return <>{fallback}</>;
  }

  // If WebP is supported, use the picture element for optimal format
  if (webpSrc) {
    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        {!isLoaded && (
          <div className={cn("absolute inset-0 flex items-center justify-center", loadingClassName)}>
            <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={imgSrc}
            alt={alt}
            className={cn(className)}
            style={{
              opacity: isLoaded ? 1 : 0.5,
              filter: isLoaded ? 'none' : 'blur(10px)',
              transition: `opacity ${animationDuration}ms ease-in-out, filter ${animationDuration}ms ease-in-out`,
              transform: "translateZ(0)" // Force GPU acceleration
            }}
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
            fetchPriority="high"
            decoding="async"
            {...props}
          />
        </picture>
      </div>
    );
  }

  // Fallback for regular images
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!isLoaded && (
        <div className={cn("absolute inset-0 flex items-center justify-center", loadingClassName)}>
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={cn(className)}
        style={{
          opacity: isLoaded ? 1 : 0.5,
          filter: isLoaded ? 'none' : 'blur(10px)',
          transition: `opacity ${animationDuration}ms ease-in-out, filter ${animationDuration}ms ease-in-out`,
          transform: "translateZ(0)" // Force GPU acceleration
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        fetchPriority="high"
        decoding="async"
        {...props}
      />
    </div>
  );
};

export { OptimizedImage }; 