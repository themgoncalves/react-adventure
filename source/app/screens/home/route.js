/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.1
 */

import Loadable from 'enhancers/loadable';

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
