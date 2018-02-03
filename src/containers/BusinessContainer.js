import React, { Component } from 'react';
import BusinessTile from '../components/BusinessTile';
import businesses from '../data/business-data.json';
import reviews from '../data/review-data.json';

export default class BusinessContainer extends Component {
    
    componentWillMount () {
        this.parseReviewData(reviews);
    }

    /**
     * Method to parse the review data to be indexed by the business id
     * 
     * @method parseReviewData
     * @param {Object} reviews
     */
    parseReviewData = reviews => {
        const reviewsByBusiness = {};
        Object.keys(reviews).forEach(user_id => {
            reviews[user_id].forEach(review => {
                if (!reviewsByBusiness[review.business_id]) {
                    reviewsByBusiness[review.business_id] = [];
                }
                // Creating a new object with user_id reference 
                // So we can use the User ID to display any in-depth detail
                reviewsByBusiness[review.business_id].push({...review, user_id});
            });
        });
        this.setState({
            reviews: reviewsByBusiness
        });
    }

    render () {
        return (
            <div className="businesses">
                <div className="title">
                    <span>Local Businesses</span>
                </div>
                <div className="business-container">
                    {businesses.map(business => (
                        <BusinessTile 
                            business={business} 
                            reviewScore={this.state.reviews[business.id].reduce((a, b) => a + b.score, 0)/this.state.reviews[business.id].length} key={business.id}/>
                    ))}
                </div>
            </div>
        );
    }
}
