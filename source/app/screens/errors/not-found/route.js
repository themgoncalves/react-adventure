/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.0.2
 */

import Loadable from 'hoc/loadable';

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
