import { combineReducers } from 'redux';

/**
 * 利用 webpack 的 require.context 自动引入所有 reducer，文件名作为属性名
 * https://webpack.js.org/guides/dependency-management/#require-context
 */
const context = require.context('./', false, /\.(js|ts)$/);

const reducers = {};

context.keys().forEach((key) => {
  if (key === './index.js') {
    return;
  }

  const reducerName = key.replace(/(\.\/)|(\.(js|ts))/g, '');
  reducers[reducerName] = context(key).default;
});

const rootReducer = combineReducers(reducers);

export default rootReducer;
