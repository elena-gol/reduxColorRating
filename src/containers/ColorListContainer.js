import { connect } from "react-redux";
import  ColorList from "../components/ColorList.js";
import { rateColor, removeColor } from "../actions/actions.js";
import sortFunction from "../helpers/sort-helper.js"

const mapStateToProps = (state) => {
    const colors = state.colors.sort(sortFunction(state.sort));
    return {
        colors: colors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove(id) {
            dispatch(removeColor(id));
        },
        onRate(id, rating) {
            dispatch(rateColor(id, rating));
        }
    }
}

export const ColorListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorList);