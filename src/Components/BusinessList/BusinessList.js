import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';



function BusinessList(props) {
    return (
    <div className="listItems" >
        {props.businesses.map((business, index) =>
        <Business key={index} business = {business} />
        )}
    </div>
    );
}

export default BusinessList;