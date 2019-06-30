import ACTION_TYPE from "../actions/actionType.js";
import colorReducer from "./colorReducer.js";

const colorsReducer = (state=[], action) => {
    switch(action.type) {
        case ACTION_TYPE.ADD_COLOR:
            return [...state, colorReducer({}, action)];
        case ACTION_TYPE.RATE_COLOR:
            return state.map(c => colorReducer(c, action));
        case ACTION_TYPE.REMOVE_COLOR:
            return state.filter(c => c.id != action.id);
        default:
            return state;
    }
}

export default colorsReducer;