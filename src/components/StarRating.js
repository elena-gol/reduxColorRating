import React from "react";
import PropTypes from 'prop-types';
import Star from "./Star";
// import "./style.scss";

const StarRating = ({starsSelected = 0, totalStars = 5, onRate= f => f}) => {
    return (
        <div className="star-rating">
            <div className="star-rating__stars">
                {
                    Array.apply(null, Array(totalStars)).map((item, index) => {
                        var isSelected = (index < starsSelected) ? true : false;

                        return <Star 
                            key={index} 
                            selected={isSelected} 
                            onClick={() => onRate(index + 1)} 
                        />
                    })
                }
            </div>
            <p className="star-rating__description">{starsSelected} of {totalStars}</p>
        </div>
    );        
}

StarRating.propTypes = {
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func
}

export default StarRating;