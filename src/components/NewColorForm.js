import React from "react";
import PropTypes from "prop-types";

const NewColorForm = ({onNewColor = (f) => f}) => {
    var _title, _color;

    const submit = (e) => {
        e.preventDefault();
        onNewColor(_title.value, _color.value);
        _title.value = "";
        _color.value = "#000000";
        _title.focus();
    }

    return (
        <form className="add-color-form" onSubmit={submit}>
            <input ref={input => _title = input} type="text" placeholder="color title..." required />
            <input ref={input => _color = input} type="color" required />
            <button>Add color</button>
        </form>
    );
}

NewColorForm.propTypes = {
    onNewColor: PropTypes.func
}

export default NewColorForm;