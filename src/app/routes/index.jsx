import Loadable from "../hoc/loadable";

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './home')
});

const AsyncAwesome = Loadable({
  loader: () => import(/* webpackChunkName: "awesome" */ './awesome')
});

export { AsyncHome, AsyncAwesome };
