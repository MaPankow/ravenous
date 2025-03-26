import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar () {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('');

    // const handleRadio = (e) => {
    //     const onClick = t
    // }

    
    return (
        <div>
            <form className="form" action="">
                <div className="radioButtons">
                    <div>
                        <input type="radio" id="best_match" name="sortBy" />
                        <label htmlFor="best_match">Best match</label>
                    </div>
                    <div>
                        <input type="radio" id="rating" name="sortBy" />
                        <label htmlFor="rating"> Highest rated</label>
                    </div>
                    <div>
                        <input type="radio" id="review_count" name="sortBy" />
                        <label htmlFor="review_count"> Most reviewed</label>
                    </div>
                </div>
                <div className="inputFields">
                    <label htmlFor="category">Search business category: </label>
                    <input type="text" id="category" /><br />
                    <label htmlFor="location">City: </label>
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

