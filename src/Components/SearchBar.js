import React from 'react';

function SearchBar () {
    
    return (
        <div>
            <form action="">
                <div>
                    <label for="bestMatch">Best match</label>
                    <input type="checkbox" id="bestMatch" />
                    <label for="highestRated">Highes rated</label>
                    <input type="checkbox" id="highestRated" />
                    <label for="mostReviewed">Most reviewed</label>
                    <input type="checkbox" id="mostReviewed" />
                </div>
                <div>
                    <label for="searchBusiness">Search business</label>
                    <input type="text" id="search" />
                    <label for="city">City</label>
                    <input type="text" id="city" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form> 
        </div>
    );
}
                

export default SearchBar;

