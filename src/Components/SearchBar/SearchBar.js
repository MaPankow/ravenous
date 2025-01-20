import React from 'react';
import './SearchBar.css';

function SearchBar () {
    
    return (
        <div>
            <form className="form" action="">
                <div className="radioButtons">
                    <div>
                        <label htmlFor="best_match">Best match</label>
                        <input type="radio" id="best_match" name="sort_by" />
                    </div>
                    <div>
                        <label htmlFor="rating"> Highest rated</label>
                        <input type="radio" id="rating" name="sort_by" />
                    </div>
                    <div>
                        <label htmlFor="review_count"> Most reviewed</label>
                        <input type="radio" id="review_count" name="sort_by" />
                    </div>
                </div>
                <div className="inputFields">
                    <label for="category">Search business category: </label>
                    <input type="text" id="category" /><br />
                    <label for="location">City: </label>
                    <input type="text" id="location" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form> 
        </div>
    );
}
                

export default SearchBar;

