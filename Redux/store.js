import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
// import { reducer as CartReducer } from "./CartReducer/reducer";
// import { reducer as ProductsReducer } from "./ProductsReducer/reducer";

const persistConfig = {
  key: "persist-key",
  storage,
};

const appReducer = combineReducers({
  AuthReducer,
  // ProductsReducer,
  // CartReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === "LOGOUT_REQUEST") {
  //   storage.removeItem("persist:root");
  //   return appReducer(undefined, action);
  // }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = legacy_createStore(
  // persistedReducer,
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export default store;
export { persistor };
