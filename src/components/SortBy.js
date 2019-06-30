import React from "react";
import PropTypes from 'prop-types';

const sortOptions = {
    timestamp: "SORTED_BY_DATE",
    title: "SORTED_BY_TITLE",
    rating: "SORTED_BY_RATING"
}

const SortBy = ({isVisible=false, sort="SORTED_BY_DATE", onSort = f => f, onClick = f => f, sortRef}) => {
    return (
        <div className="sort-block" ref={sortRef}>
            <p className="sort-block__label" onClick={onClick}>Sort colors by</p>
            {
                isVisible && (
                    <ul className="sort-block__menu">
                    {
                        Object.keys(sortOptions).map((value, i) => {
                            const sortKeyClass = (sortOptions[value] == sort) ? 
                                "sort-block__key sort-key sort-key_active" : 
                                "sort-block__key sort-key";
                            return <li key={i} className={sortKeyClass} onClick={() => {
                                onSort(sortOptions[value]);
                            }}>{value}</li>
                        })
                    }
                    </ul>
            )}            
        </div>
    );
}

SortBy.propTypes = {
    isVisible: PropTypes.bool,
    sort: PropTypes.string,
    onSort: PropTypes.func,
    onClick: PropTypes.func
}

export default SortBy;