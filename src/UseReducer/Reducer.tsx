export interface State {
    number: number;
}

export interface Action {
    type: string;
    payload: any;
}

export const initialState: State = {
    number: 0,
};

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case "sum":
            return { ...state, number: action.payload + state.number };
        case "multiply":
            return { ...state, number: action.payload * state.number };
        case "share":
            return { ...state, number: action.payload / state.number };
        case "removeDecimalPlaces":
            return { ...state, number: state.number.toFixed(0) };
        default:
            return state;
    }
}