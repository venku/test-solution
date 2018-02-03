import React from 'react';
import PropTypes from 'prop-types';

const BusinessTile = props => (
    <a className="business-tile" href={props.business.href}>
        <div className="image-container">
            <img src={props.business.imageUrl} className="business-image" alt={props.business.name}/>
            <div className="review-container">
                <span>{props.reviewScore}</span>
            </div>
        </div>
        <div className="business-category">
            <span>{props.business.category}</span>
        </div>
        <div className="business-name">
            <span>{props.business.name}</span>
        </div>
        <div className="business-description">
            <span>{props.business.description}</span>
        </div>
    </a>
);

BusinessTile.propTypes = {
    business: PropTypes.object,
    reviewScore: PropTypes.number
};

export default BusinessTile;
