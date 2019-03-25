import { Action as ReduxAction } from "redux";

export interface Action extends ReduxAction<string> {}

export interface ActionWithPayload<A> extends Action {
  payload: A;
}
