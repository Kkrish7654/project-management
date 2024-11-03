import { createStore, compose } from "redux";
import { rootReducer } from "../redux/reducer";

// Declare global interface for Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const composeEnhancers =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose;

const store = createStore(rootReducer, {}, composeEnhancers);

export default store;
