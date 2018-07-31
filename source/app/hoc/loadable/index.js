/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */

import L from 'react-loadable';
import Loading from 'components/v1/loading';

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
