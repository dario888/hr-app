import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';



const initialState = {};
const middleware = [thunk];

// REDUX DEVTOOLS EXTENSION
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Craeting Store
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)) );

export default store;