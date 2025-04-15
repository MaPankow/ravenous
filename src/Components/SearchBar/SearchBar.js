import React, {useState} from 'react';
import './SearchBar.css';
import searchBusinesses from '../../utils/API';


function SearchBar ({ setBusinesses, businesses }) {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [zip_code, setZip_code] = useState('');



    const handleRadio = async (e) => {
        setSortBy(e.target.value);
        if (term!=='' && location !== '' && businesses.length > 0) {
            try {
                const results = await searchBusinesses(term, location, e.target.value);
                setBusinesses(results);    
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        } 
        else if (term!=='' && zip_code !== '' && businesses.length > 0) {
            try {
                const results = await searchBusinesses(term, zip_code, e.target.value);
                setBusinesses(results);    
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    };

    const handleTerm = (e) => {
        setTerm(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    const handleZip_code = async (e) => {
        setZip_code(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (term !== '' && sortBy !== '') {
            const searchLocation = zip_code || location;
            if (searchLocation === '') {
                alert('Please enter a location or ZIP code!');
                return;
            }
            
            try {
                const results = await searchBusinesses(term, searchLocation, sortBy);
                console.log("results:", results);
                // der Log war zunächst zum Debuggen hilfreich, kann aber auch einkommentiert werden, wenn man mal schnell die richitgen Keys aus der API wissen will

                
                if (results.length === 0) {
                    alert("No businesses found for the secified data");
                } else {
                    setBusinesses(results); 
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("An error occured while fetching data. Please try again.")
                }   
            } else {
                alert('Please fill in all the fields!');
                return;
            }   
        }

    const handleEnter = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (term !== '' && sortBy !== '') {
                const searchLocation = zip_code || location;
                if (searchLocation === '') {
                    alert('Please enter a location or ZIP code!');
                    return;
                }
                
                try {
                    const results = await searchBusinesses(term, searchLocation, sortBy);
                    console.log("results:", results);
                    // der Log war zunächst zum Debuggen hilfreich, kann aber auch einkommentiert werden, wenn man mal schnell die richitgen Keys aus der API wissen will

                    
                    if (results.length === 0) {
                        alert("No businesses found for the secified data");
                    } else {
                        setBusinesses(results); 
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    alert("An error occured while fetching data. Please try again.")
                    }   
                } else {
                    alert('Please fill in all the fields!');
                    return;
                }   
            }
        }



    
    return (
        <div>
            <form className="form" action="" onSubmit={handleSubmit} onKeyDown={handleEnter}>
                <div className="radioButtons" >
                    <div>
                        <input type="radio" id="best_match" name="sortBy" value="best_match" onChange={handleRadio} />
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
                    <label htmlFor="location">Place: </label>
                    <input type="text" id="location" onChange={handleLocation} />
                    <label htmlFor="distance"> or ZIP code/postal number: </label>
                    <input type="text" id="distance" onChange={handleZip_code} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form> 
        </div>
    );
}
                

export default SearchBar;

