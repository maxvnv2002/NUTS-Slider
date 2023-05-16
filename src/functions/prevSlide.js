import {store} from "../store";
import * as actionTypes from "../store/actions";
import {calcOffset} from "./calcOffset";

export const prevSlide = () => {
    const {activeSlide, actualRetreat, actualSize} = store.getState().offset

    const isFirstCell = actualRetreat === activeSlide

    const nextCell = isFirstCell ? actualRetreat : activeSlide - 1

    const nextOffset = calcOffset(isFirstCell, nextCell, actualRetreat, actualSize)

    store.dispatch({
        type: actionTypes.cellUpdated,
        payload: {offset: nextOffset, activeSlide: nextCell}
    })
}