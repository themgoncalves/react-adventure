/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

let history = null;
if (typeof document !== 'undefined') {
  history = createBrowserHistory();
} else {
  history = createMemoryHistory();
}

export { history };
export default history;
