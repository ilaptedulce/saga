import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import news from "./news";
import errors from "./errors";
import loader from './loader';
import authentication from './authentication';

export const history = createBrowserHistory();

const reducer = combineReducers({
  authentication,
  news,
  errors,
  loader,
  router: connectRouter(history),
});

export default reducer;
