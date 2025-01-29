import * as types from '../Constants/nice';

export const plusOne = _ => {
    return {
        type: types.PLUSONE
    };
}
export const plusFive = _ => {
    return {
        type: types.PLUSFIVE
    };
}
export const minusOne = _ => {
    return {
        type: types.MINUSONE
    };
}
export const reset = _ => {
    return {
        type: types.RESET
    };
}
export const add = payload => {
    return {
        type: types.ADD,
        payload: parseInt(payload)
    };
}
export const multi = payload => {
    return {
        type: types.MULTI,
        payload: parseInt(payload)
    };
}