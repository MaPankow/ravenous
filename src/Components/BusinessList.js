import React from 'react';
import Business, {business} from './Business';

function BusinessList() {
    const businesses = [];
    businesses.push(business.name);
    const businessList = businesses.map(business => <li>{business}</li>);
    return <ul>{businessList}</ul>;
}

export default BusinessList;