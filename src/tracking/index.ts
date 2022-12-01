import { initialize, trackPageView } from "./global";

export class Tracker {
  // Initialize
  public initialize = initialize;

  // Pageview
  public trackPageView = trackPageView;
}

const tracker = () => new Tracker();
export default tracker;
