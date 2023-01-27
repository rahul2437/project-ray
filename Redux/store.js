// import {
//     legacy_createStore as createStore,
//     applyMiddleware,
//     compose,
//     combineReducers
// } from 'redux';
// import thunk from 'redux-thunk';
// import { authReducer } from './auth/reducer';
// import { courseReducer } from './course/reducer';
// import { userReducer } from './user/reducer';

// const rootReducer = combineReducers({
//     auth : authReducer,
//     course : courseReducer,
//     user : userReducer,
// });

// const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

