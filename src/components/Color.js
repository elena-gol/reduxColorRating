import React from "react";
import PropTypes from 'prop-types';
import StarRating from "./StarRating.js";

const Color = (props) => {
    const { title, color, rating, onRemove, onRate} = props;

    return (
        <div className="color-item">
            <div className="color-item__wrapper">
                <p className="color-item__name">{title}</p>                
                <div className="color-item__color" style={{backgroundColor: color}}>
                    <button className="color-item__remove-button" onClick={onRemove}>Delete color</button>
                </div>
                <div>
                    <StarRating 
                        starsSelected={rating}
                        onRate={(rating) => onRate(rating)} 
                    />
                </div>
            </div>                
        </div>
    );   
}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

Color.defaultProps = {
    rating: 0,
    onRemove: f=>f,
    onRate: f=>f
}

export default Color;