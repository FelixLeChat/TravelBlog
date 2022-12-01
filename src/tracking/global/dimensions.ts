import { canUseDOM } from 'exenv';
import ReactGA from 'react-ga4';

export const setDimension = (index: number, value: string | number): void => {
  if (canUseDOM && window.analytics?.initialised) {
    ReactGA.ga('set', `dimension${index}`, value);
  }
};
