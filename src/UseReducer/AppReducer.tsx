import useNumbers from "./userNumbers";

export default function UseReducer() {
    const { state, sum, multiply, share, removeDecimalPlaces } = useNumbers();
    return (
        <div>
            <h1>{state.number}</h1>
            <button onClick={() => sum()}>+2</button>
            <button onClick={() => multiply()}>*25</button>
            <button onClick={() => share()}>/7</button>
            <button onClick={() => removeDecimalPlaces()}>
                Remover Casas Decimais
            </button>
        </div>
    );
}