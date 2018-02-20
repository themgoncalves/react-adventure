/**
 * React Redux Async starter kit
 * @author Marcons Goncalves <marx_souza@yahoo.com.br>
 * @version 1.2.01
 */

import L from 'react-loadable';
import LoadingPage from '../component/loading-page';

/**
 * High Order Component wrapping react-loadable
 * @function
 * @return {function} HoC with given component wrapped
 */
const Loadable = (opts) => L({
  loading: LoadingPage,
  delay: 300,
  ...opts,
});

export default Loadable;
