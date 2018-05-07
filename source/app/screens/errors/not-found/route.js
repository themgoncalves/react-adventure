/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
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
