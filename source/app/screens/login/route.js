/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */

import Loadable from '../../hoc/loadable';

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
