import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

interface BackgroundRemovedIconProps {
  src: string;
  alt: string;
  className?: string;
}

const BackgroundRemovedIcon = ({ src, alt, className }: BackgroundRemovedIconProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        
        // Load the original image
        const imageElement = await loadImageFromUrl(src);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    return () => {
      // Clean up object URL
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [src]);

  if (isProcessing) {
    return (
      <div className={`bg-gray-200 animate-pulse rounded ${className}`}>
        <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
          Processing...
        </div>
      </div>
    );
  }

  if (error || !processedImageUrl) {
    // Fallback to original image if processing fails
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <img 
      src={processedImageUrl} 
      alt={alt} 
      className={className}
    />
  );
};

export default BackgroundRemovedIcon;