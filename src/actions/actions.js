import ACTION_TYPE from "./actionType.js";
import {v4 as generateColorID} from "uuid";

export const addColor = (title, color) => {
    return {
        type: ACTION_TYPE.ADD_COLOR,
        id: generateColorID(),
        title,
        color,
        timestamp: new Date().toString()
    };
}

export const rateColor = (id, rating) => {
    return {
        type: ACTION_TYPE.RATE_COLOR,
        id,
        rating
    }
}

export const removeColor = (id) => {
    return {
        type: ACTION_TYPE.REMOVE_COLOR,
        id
    }
}

export const sortColors = sortBy => {
    return {
        type: ACTION_TYPE.SORT_COLORS,
        sortBy
    }
}