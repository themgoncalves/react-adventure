/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 1.2.01
 */
import Loadable from "../hoc/loadable";

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './home')
});

const AsyncAwesome = Loadable({
  loader: () => import(/* webpackChunkName: "awesome", webpackPrefetch: true */ './awesome')
});

export { AsyncHome, AsyncAwesome };
