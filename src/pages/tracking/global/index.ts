import { canUseDOM } from 'exenv';
import ReactGA from 'react-ga4';

// //
// Initialize google tracking
// //
export const initialize = (trackingCode: string): void => {
  if (canUseDOM && trackingCode) {
    ReactGA.initialize(trackingCode);
    window.analytics = { initialised: true };
  } else if (!trackingCode) {
    // eslint-disable-next-line no-console
    console.warn('Set GOOGLE_ANALYTICS_TRACKING_CODE in .env to use analytics');
  }
};

// //
// Log Pageview
// //
export const trackPageView = (): void => {
  if (canUseDOM && window.analytics?.initialised) {
    const path = window.location.pathname + window.location.search;

    // Set tracker page (for other events), and trigger pageview
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
  }
};
