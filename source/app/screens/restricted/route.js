/**
 * React Adventure
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import Loadable from 'hoc/loadable';

const RestrictedAreaScreenAsync = Loadable({
  loader: () => import(/* webpackChunkName: "restricted-area" */ './screen'),
});

const RestrictedAreaRoute = [
  {
    path: '/restricted-area',
    exact: true,
    component: RestrictedAreaScreenAsync,
  },
];

export default RestrictedAreaRoute;
