import {store} from "../store";
import * as actionTypes from "../store/actions";
import {calcOffset} from "./calcOffset";

export const nextSlide = () => {
    const cellsLength = store.getState().cells.length
    const {activeSlide, actualRetreat, actualSize} = store.getState().offset

    const isLastCell = cellsLength === activeSlide

    const nextCell = isLastCell ? actualRetreat : activeSlide + 1

    const nextOffset = calcOffset(isLastCell, nextCell, actualRetreat, actualSize)

    store.dispatch({
        type: actionTypes.cellUpdated,
        payload: {offset: nextOffset, activeSlide: nextCell}
    })



    // if (store.getState().offset.offset === maxOffset) {
    //     const nextOffset = -(maxOffset)
    //     store.dispatch({ type: actionTypes.slideNext, payload:  nextOffset  })
    //
    // } else {
    //     store.dispatch({ type: actionTypes.slideNext, payload:  cellSize  })
    // }
}