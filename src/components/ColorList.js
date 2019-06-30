import React from "react";
import PropTypes from 'prop-types';
import Color from "./Color.js";

const ColorList = ({colors = [], onRate = f => f, onRemove = f => f}) => {
    return (
        <div className="color-list">            
            { 
                colors.map(color => 
                    <Color 
                        {...color}
                        key={color.id}
                        onRemove={() => onRemove(color.id)}
                        onRate={(rating) => onRate(color.id, rating)}
                    />
                )
            }
        </div>
    );
}

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

export default ColorList;