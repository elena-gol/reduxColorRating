import ACTION_TYPE from "../actions/actionType.js";

const sortReducer = (state="SORTED_BY_DATE", action) => {
    switch(action.type) {
        case ACTION_TYPE.SORT_COLORS:
            return action.sortBy;
        default:
            return state;
    }
}

export default sortReducer;