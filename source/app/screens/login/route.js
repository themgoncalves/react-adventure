/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.1
 */

import Loadable from 'enhancers/loadable';

const LoginScreenAsync = Loadable({
  loader: () => import(/* webpackChunkName: "login", webpackPrefetch: true */ './screen.jsx'),
});

const LoginRoute = [
  {
    path: '/login',
    exact: true,
    component: LoginScreenAsync,
  },
];

export default LoginRoute;
