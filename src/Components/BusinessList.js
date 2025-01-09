import React from 'react';
import Business from './Business';



function BusinessList() {
    const listItems= [
        <Business key={1} />,
        <Business key={2} />,
        <Business key={3} />,
        <Business key={4} />
    ];
    return (
        <div>{listItems}</div>
    );
}

export default BusinessList;