/**
 * React Adventure
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import L from 'react-loadable';
import Loading from 'components/loading';

/**
 * High Order Component wrapping react-loadable
 * @function
 * @return {function} HOC with given component wrapped
 */
const Loadable = options => L({
  loading: Loading,
  delay: 300,
  ...options,
});

export default Loadable;
