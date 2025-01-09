import React from 'react';

function SearchBar () {
    
    return (
        <div>
            <form action="">
                <label for="searchBusiness">Search business</label>
                <input type="text" id="search" />
                <label for="city">City</label>
                <input type="text" id="city" />
                <input type="submit" value="Submit" />
            </form> 
        </div>
    );
}

export default SearchBar;

