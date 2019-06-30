import React from "react";
import PropTypes from 'prop-types';

const Star = ({selected = 0, onClick = f => f}) => {
    var className = (selected) ? "star selected" : "star";
    return (
        <div className={className} onClick={onClick}></div>
    );        
}

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star;