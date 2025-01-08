import React from 'react';
import Business from './Business';

function BusinessList() {
    const businesses = [];
    businesses.push(Business);
    const businessList = businesses.map(business => <li>{business}</li>);
    return <ul>businessList</ul>;
}

export default BusinessList;