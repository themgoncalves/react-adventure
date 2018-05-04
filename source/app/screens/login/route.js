/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import { Route } from 'react-router';
import Loadable from '../../hoc/loadable';

const LoginScreenAsync = Loadable({
  loader: () => import(/* webpackChunkName: "login", webpackPrefetch: true */ './screen.jsx')
});

const LoginRoute = [
  {
    path: '/login',
    exact: true,
    component: LoginScreenAsync
  }
];

export default LoginRoute;
