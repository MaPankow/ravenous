import React, {useState} from 'react';
import './SearchBar.css';
import searchBusinesses from '../../utils/API';

function SearchBar ({ setBusinesses }) {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('');

    const handleRadio = (e) => {
        setSortBy(e.target.value);
    }

    const handleTerm = (e) => {
        setTerm(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const results = await searchBusinesses(term, location, sortBy);
            console.log("results:", results);
            // der Log war zunächst zum Debuggen hilfreich, kann aber auch einkommentiert werden, wenn man mal schnell die richitgen Keys aus der API wissen will
            setBusinesses(results);    
        } catch (error) {
            console.error("Error fetching data:", error);
        }          
    };

    
    return (
        <div>
            <form className="form" action="" onSubmit={handleSubmit}>
                <div className="radioButtons">
                    <div>
                        <input type="radio" id="best_match" name="sortBy" value="best_match" onChange={handleRadio}/>
                        <label htmlFor="best_match"> Best match</label>
                    </div>
                    <div>
                        <input type="radio" id="rating" name="sortBy" value="rating" onChange={handleRadio} />
                        <label htmlFor="rating"> Highest rated</label>
                    </div>
                    <div>
                        <input type="radio" id="review_count" name="sortBy" value="review_count" onChange={handleRadio} />
                        <label htmlFor="review_count"> Most reviewed</label>
                    </div>
                </div>
                <div className="inputFields">
                    <label htmlFor="term">Search terms: </label>
                    <input type="text" id="term" onChange={handleTerm} />
                    <br />
                    <label htmlFor="location">Location: </label>
                    <input type="text" id="location" onChange={handleLocation} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form> 
        </div>
    );
}
                

export default SearchBar;

