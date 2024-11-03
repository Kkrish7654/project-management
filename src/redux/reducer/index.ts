import { combineReducers } from "redux";
import { projectReducer } from "./ProjectReducer";

const allReducers = combineReducers({
  projectReducer
});

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action);
};

export { rootReducer };
