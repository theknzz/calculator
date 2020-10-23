import calculate from "../../logic/calculate";

const initialState = {
    number: '',
    operation: '',
    result: '',
    string: '',
};

const rootReducer = (state = initialState, action) => {
    if (action.type === 'CALCULATE') {
        const aux =calculate(state, action.content);
        console.log(aux)
        return aux;
    }
    return state;
}

export default rootReducer