// const isDev = process.env.NODE_ENV === "development";

import mixpanel from "mixpanel-browser";

mixpanel.init("514b7fb51644378cd940aebb67526b69");
// {
//   // Use your project's URL, adding a slug for all Mixpanel requests
//   debug: isDev,
//   ignore_dnt: isDev,
// });

export const Mixpanel = {
  identify: (id) => {
    mixpanel.identify(id);
  },
  alias: (id) => {
    mixpanel.alias(id);
  },
  track: (name, props) => {
    mixpanel.track(name, props);
  },
};
