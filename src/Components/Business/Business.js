import React from 'react';
import './Business.css'; 


function Business (props) {
    const { business } = props;
    return (
        <div className='business'> 
            <img className='business-image' src={business.image_url} alt={business.name} />
            <h2 className='business-name'>{business.name}</h2>
            <div className='business-category'>
                <p>Category: {business.category}</p>   
            </div>
            <div className="business-address">
                <p>{business.location.address1}, {business.location.city}</p>
                <p>{business.location.state} {business.location.zip_code} </p>
            </div>
            <div className="business-statistics">
                <p>Average rating: {business.rating}</p>
                <p>Reviews: {business.review_count}</p>
            </div>
        </div>
    );
}

export default Business;
