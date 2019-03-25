import { Action, ActionWithPayload } from "..";

export const CountActionTypes = {
  Increment: "[Counter] Increment",
  DecrementBy: "[Counter] Decrement By Amount",
};

export type Increment = Action;
export type DecrementBy = ActionWithPayload<number>;

export const increment = () => ({
  type: CountActionTypes.Increment,
});

export const decrementBy = (amount: number) => ({
  type: CountActionTypes.DecrementBy,
  payload: amount,
});

export type CountAction = Increment | DecrementBy;
