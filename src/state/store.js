

import {createStore, applyMiddleware , compose , combineReducers} from 'redux';
import configReducer from './config/configReducer'; 

import thunk from 'redux-thunk';

//Enable Redux in Dev-Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create the Store of Truth
const rootReducer = combineReducers({
    config: configReducer,
})

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));