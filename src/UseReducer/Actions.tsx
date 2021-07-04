import { Action } from "./Reducer";

export function sum(dispatch: React.Dispatch<Action>) {
  return () => dispatch({ type: "sum", payload: 2 });
}

export function multiply(dispatch: React.Dispatch<Action>) {
  return () => dispatch({ type: "multiply", payload: 25 });
}

export function share(dispatch: React.Dispatch<Action>) {
  return () => dispatch({ type: "share", payload: 7 });
}

export function removeDecimalPlaces(dispatch: React.Dispatch<Action>) {
  return () => dispatch({ type: "removeDecimalPlaces", payload: 0 });
}