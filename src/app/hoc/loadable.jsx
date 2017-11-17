import L from 'react-loadable';
import LoadingPage from '../component/loading-page'

const Loadable = (opts) => {
  L({
    LoadingComponent: LoadingComponent,
    delay: 300,
    ...opts
  });
}
export default Loadable;