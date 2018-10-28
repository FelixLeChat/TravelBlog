import ReactGA from 'react-ga';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const canUseDOM = !!(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export const initGA = () => {
  if (canUseDOM) {
    ReactGA.initialize(publicRuntimeConfig.googleAnalyticsCode);
  }
};

export const logPageView = () => {
  // Path + query params
  const path = window.location.pathname + window.location.search;
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export const logAppointmentConversion = (appointmentLink = '') => {
  if (appointmentLink) {
    ReactGA.event({
      category: 'Appointment',
      action: 'click',
      label: appointmentLink,
    });
  }
};
