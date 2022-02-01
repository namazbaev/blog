import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const logger = createLogger({
    timestamp: true,
    diff: true,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export default store;