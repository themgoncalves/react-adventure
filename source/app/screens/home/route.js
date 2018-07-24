/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.1.0
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
