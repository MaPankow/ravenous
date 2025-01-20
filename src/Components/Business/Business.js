import React from 'react';
import './Business.css'; 
const business = {
    image:"/img/pexels-chan_walrus-941861.jpg",
    name:"Jocelyn's Fine Kitchen",
    address:"Home Street 55",
    city:"New York City",
    state:"New York (bestimmt nicht)",
    zipcode:"12345",
    category:"Tapas",
    rating:4.9,
    rewiewCount:25
}

function Business () {
    return (
        <div className='business'> 
            <img className='business-image' src={business.image} alt="Foto of a table in restaurant Jocelyns Fine Kitchen" />
            <h2 className='business-name'>{business.name}</h2>
            <div className='business-category'>
                <p>Category: {business.category}</p>   
            </div>
            <div className="business-address">
                <p>{business.address}</p>
                <p>{business.zipcode} {business.city} </p>
                <p>{business.state}</p>
            </div>
            <div className="business-statistics">
                <p>Average rating: {business.rating}</p>
                <p>Reviews: {business.rewiewCount}</p>
            </div>
        </div>
    );
}

export default Business;
