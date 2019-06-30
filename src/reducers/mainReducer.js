import ACTION_TYPE from "../actions/actionType.js";
import colorsReducer from "./colorsReducer.js";
import sortReducer from "./sortReducer.js";

const mainReducer = (state, action) => {
    switch(action.type) {
        case ACTION_TYPE.ADD_COLOR:
            return {colors: colorsReducer(state.colors, action), sort: state.sort};
        case ACTION_TYPE.RATE_COLOR:
            return {colors: colorsReducer(state.colors, action), sort: state.sort};
        case ACTION_TYPE.REMOVE_COLOR:
            return {colors: colorsReducer(state.colors, action), sort: state.sort};
       case ACTION_TYPE.SORT_COLORS:
            const sort = sortReducer(state.sort, action);
            return {colors: [...state.colors], sort: sort};
        default:
            return state;
    }
}

export default mainReducer;