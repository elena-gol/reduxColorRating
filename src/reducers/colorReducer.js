import ACTION_TYPE from "../actions/actionType.js";

const colorReducer = (state={}, action) => {
    switch(action.type) {
        case ACTION_TYPE.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            };
        case ACTION_TYPE.RATE_COLOR:
            return (state.id == action.id) ? {...state, rating: action.rating} : state;
        default:
            return state;
    }
}

export default colorReducer;