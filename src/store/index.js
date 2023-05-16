import {applyMiddleware, combineReducers, createStore} from "redux";
import {offsetReducer} from "./reducers/offsetReducer";
import {cellsReducer} from "./reducers/cellsReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    offset: offsetReducer,
    cells: cellsReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));