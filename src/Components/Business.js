import React from 'react';

const business = {
    image:"/img/pexels-chan_walrus-941861.jpg",
    name:"Jocelyn's Fine Kitchen",
    address:"Home Street 55",
    city:"Berlin",
    country:"Germany",
    zipcode:"12345",
    category:"Tapas",
    rating:4.9,
    rewiewCount:25
}

function Business () {
    return (
        <div>
            <img src={business.image} alt="Foto of a table in restaurant Jocelyns Fine Kitchen" />
            <h1>{business.name}</h1>
            <div id="address">
                <p>{business.address}</p>
                <p>{business.zipcode} {business.city}</p>
            </div>
            <div id="stats">
                <p>Category: {business.category}</p>
                <p>Average rating: {business.rating}</p>
                <p>Reviews: {business.rewiewCount}</p>
            </div>
        </div>
    );
}

export default Business;
