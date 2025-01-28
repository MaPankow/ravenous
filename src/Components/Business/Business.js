import React from 'react';
import './Business.css'; 


function Business (props) {
    const { business } = props;
    return (
        <div className='business'> 
            <img className='business-image' src={business.image} alt="{business.name}" />
            <h2 className='business-name'>{business.name}</h2>
            <div className='business-category'>
                <p>Category: {business.category}</p>   
            </div>
            <div className="business-address">
                <p>{business.address}</p>
                <p>{business.zipcode} {props.city} </p>
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
