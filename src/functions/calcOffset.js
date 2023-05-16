import {store} from "../store";

export const calcOffset = (isLimit, nextSlideIndex, actualRetreat, actualSize) => {
    // isLimit -> является ли ячейка первой или последней
    // nextSlideIndex -> Целевая ячейка (+1) или (-1) от текущей

    //console.log(isLimit, nextSlideIndex, actualRetreat, actualSize)
    //console.log(actualSize)
    return isLimit ? 0 : (nextSlideIndex - actualRetreat) * actualSize
}