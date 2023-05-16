import * as actionTypes from '../actions'

const initialState = {
    activeSlide: 0,
    offset: 0,
    actualSize: 300,
    actualRetreat: 4,
}

export const offsetReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.cellUpdated:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};