import React from 'react';
import './Business.css'; 
import WebsiteLink from '../WebsiteLink/WebisteLink';


function Business (props) {
    const { business } = props;
    const encodedAddress = encodeURIComponent(business.location.display_address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    return (
        <div className='business'> 
            <WebsiteLink business={business}/>
            <h2 className='business-name'>{business.name}</h2>
            <div className='business-category'>
                <p>Category: {business.category}</p>   
            </div>
            <div className="business-address">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <p>{business.location.address1}, {business.location.city}</p>
                    <p>{business.location.state} {business.location.zip_code} </p>
                </a>
            </div>
            <div className="business-statistics">
                <p>Average rating: {business.rating}</p>
                <p>Reviews: {business.review_count}</p>
            </div>
        </div>
    );
}

export default Business;
