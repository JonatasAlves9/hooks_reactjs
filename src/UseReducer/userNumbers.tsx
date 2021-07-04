import { useReducer } from "react";
import { initialState, reducer } from "./Reducer";
import { sum, multiply, share, removeDecimalPlaces } from "./Actions";

export default function MyHooks() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        state,
        sum: sum(dispatch),
        multiply: multiply(dispatch),
        share: share(dispatch),
        removeDecimalPlaces: removeDecimalPlaces(dispatch),
    };
}
