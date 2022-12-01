export {}; // this file needs to be a module

declare global {
  interface Window {
    analytics: {
      initialised: boolean;
      userLanguage?: string;
    };
  }
}
