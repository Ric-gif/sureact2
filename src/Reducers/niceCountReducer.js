import * as type from '../Constants/nice';

export default function niceCountReducer(state, action) {
    let newState;

    switch(action.type) {
        case type.PLUSONE:
            newState = {value: state.value + 1};
            break;
        case type.MINUSONE:
            newState = {value: state.value - 1};
            break;
        case type.ADD:
            newState = {value: state.value + action.payload};
            break;
        case type.MULTI:
            newState = {value: state.value * action.payload};
            break;
        case type.RESET:
            newState = {value: 0};
            break;
        case type.PLUSFIVE:
            newState = {value: state.value + 5};
            break;
        default:
            newState = state;
    }

    return newState;
}