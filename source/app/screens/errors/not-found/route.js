/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.1
 */

import Loadable from 'enhancers/loadable';

const NotFoundScreenAsync = Loadable({
  loader: () => import(/* webpackChunkName: "error-not-found" */ './screen'),
});

const Error404Route = [
  {
    path: '*',
    exact: true,
    component: NotFoundScreenAsync,
  },
];

export default Error404Route;
