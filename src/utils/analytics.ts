import { track } from '@vercel/analytics';

// Vercel Analytics event tracking
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  track('button_click', {
    buttonName,
    buttonLocation,
    timestamp: new Date().toISOString()
  });
  
  // Also track in Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ButtonClick', {
      buttonName,
      buttonLocation
    });
  }
};

// Facebook Pixel event tracking
export const trackFacebookEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
}; 