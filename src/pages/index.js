import createLoadableComponent from '@src/utils/LoadableFactory'

export const Home = createLoadableComponent(() => import('./Home'));
export const Form = createLoadableComponent(() => import('./Form'));
export const Table = createLoadableComponent(() => import('./Table'));
export const Input = createLoadableComponent(() => import('./Input'));



