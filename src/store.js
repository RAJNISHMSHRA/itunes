import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux'
import {createBrowserHistory} from 'history'

import reducer from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();
const router = routerMiddleware(history);
const middleware = composeEnhancers(applyMiddleware(thunk, router));

const store=createStore(
reducer,
middleware
)

export default store

