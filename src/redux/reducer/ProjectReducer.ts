import { projectConstant } from "../constants/ProjectConstant";

export function projectReducer(
  state = { isLoading: false },
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case projectConstant.SET_LOADING:
      return { ...state, isLoading: true };

    case projectConstant.ADD_PROJECT:
      return { ...state, projects: action.payload };

    default:
      return state;
  }
}
