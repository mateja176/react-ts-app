import { combineReducers } from "redux";
import count, { CountState } from "./count";

export type State = {
  count: CountState;
};

export default combineReducers({
  count,
});

export const selectCount = (state: State) => state.count;
