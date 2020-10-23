import operate from './operate'

const calculate = (state, btnName) => {
    // if the btn pressed is a operator
    if (isNaN(btnName) && btnName !== '.') {
        // clear the state
        if (btnName === 'AC')
            return {
                number: '',
                operation: '',
                result: '',
                string: '',
            }

        if (btnName === '+/-' && state.number !== '') {
            let nr = parseInt(state.number);
            nr *= -1;
            let obj;
            state.result === '' ?
                obj = {
                    ...state,
                    number: nr.toString(),
                    string: nr.toString(),
                }
            :
                obj = {
                    ...state,
                    number: nr.toString(),
                    string: state.result + ' ' + state.operation + ' ' + nr.toString(),
                }
            return obj;
        }
        // update the state.result with the result of the pretended operation
        if (state.result !== '' && state.number !== '') {
            const equals = operate(state.result, state.operation, state.number).toString();
            return {
                ...state,
                result: equals,
                string: equals,
                operation: btnName === '='? '' : btnName,
                number: '',
            }
        }
        // if the user is trying to break the calculator lol
        if (state.operation !== '') return {
            ...state,
            operation: btnName,
        };
        if (state.string.length > 0)
            // update the result to the first number so the state.number is clear to store the next number
            return {
                operation: btnName,
                result: state.number,
                string: state.string+' '+btnName,
                number: '',
            };
        return state;
    }
    // is the button clicked is a number
    else {
        if (state.operation === '')
            return {
                ...state,
                number: state.number+btnName,
                string: state.number+btnName,
            };
        else
            return {
                ...state,
                number: state.number+btnName,
                string: state.result+' '+state.operation+' '+state.number+btnName,
            }
    }
}

export default calculate