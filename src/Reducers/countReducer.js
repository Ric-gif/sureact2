export default function countReducer(state, action) {
    let newState;

    switch(action.type) {
        case 'plusOne':
            newState = state + 1;
            break;
        case 'minusOne':
            newState = state - 1;
            break;
        case 'add':
            newState = state + action.payload;
            break;
        case 'multi':
            newState = state * action.payload;
            break;
        default:
            newState = state;
    }

    return newState;
}