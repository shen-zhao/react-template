import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import createStore from './reducer/create';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
