import { connect } from "react-redux";
import  NewColorForm from "../components/NewColorForm.js";
import { addColor } from "../actions/actions.js";

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewColor(title, color) {
            dispatch(addColor(title, color));
        }
    }
}

export const NewColorFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewColorForm);