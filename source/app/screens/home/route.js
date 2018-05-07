/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import Loadable from 'hoc/loadable';

const HomeScreenAsync = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './screen'),
});

const HomeRoute = [
  {
    path: '/',
    exact: true,
    component: HomeScreenAsync,
  },
];

export default HomeRoute;
