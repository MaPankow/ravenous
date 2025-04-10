import React from 'react';


function WebsiteLink({business}) {
    return(
        <a href={business.url} target="_blank" rel="noopener noreferrer">
                <img className='business-image' src={business.image_url} alt={business.name} />
        </a>
    )
}
export default WebsiteLink;