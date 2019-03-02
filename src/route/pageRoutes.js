import {
  Home,
  Form,
  Input,
  Table
} from '@src/pages/index';

export default [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/form',
    component: Form,
    exact: true
  },
  {
    path: '/form/input',
    component: Input,
    exact: true
  },
  {
    path: '/table',
    component: Table,
    exact: true
  }
];
