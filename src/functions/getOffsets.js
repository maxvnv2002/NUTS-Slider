//const breakpoint_xxl = 1399.98;
const breakpoint_xl = 1199.98;
const breakpoint_lg = 991.98;
const breakpoint_md = 767.98;
const breakpoint_sm = 575.98;

export function getOffsets(clientWidth){
    if (clientWidth < breakpoint_sm) {
        return 290
    }
    if (clientWidth < breakpoint_md) {
        return 290
    }
    if (clientWidth < breakpoint_lg) {
        return 300
    }
    if (clientWidth < breakpoint_xl) {
        return 300
    }
    return 300
}
export function getRetreat(clientWidth){
    // < 767
    if (clientWidth < breakpoint_md) {
        return 1
    }
    // < 991
    if (clientWidth < breakpoint_lg) {
        return 2
    }
    // < 1199
    if (clientWidth < breakpoint_xl) {
        return 3
    }
    // > 1199
    return 4
}


