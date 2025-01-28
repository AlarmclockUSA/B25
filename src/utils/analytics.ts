import { track } from '@vercel/analytics';

export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  track('button_click', {
    buttonName,
    buttonLocation,
    timestamp: new Date().toISOString()
  });
}; 