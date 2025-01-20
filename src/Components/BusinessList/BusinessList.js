import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';



function BusinessList() {
    const listItems= [
        <Business key={1} />,
        <Business key={2} />,
        <Business key={3} />,
        <Business key={4} />
    ];
    return (
        <div className="listItems">{listItems}</div>
    );
}

export default BusinessList;