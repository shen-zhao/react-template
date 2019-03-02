import Loadable from 'react-loadable';
import { PageLoading } from '@src/components';

const createLoadableComponent = (loader, opts = {}) => {
  return Loadable({
    loading: PageLoading,
    loader,
    ...opts
  });
}

export default createLoadableComponent;
