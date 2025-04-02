import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar () {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('');

    const handleRadio = (e) => {
        setSortBy(e.target.value);
    }

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = [category, location, sortBy];
        const [val1, val2, val3] = input;

        console.log("Searching Yelp with " + val1 + ", " + val2 + ", " + val3);
    }
/*
Beispiele destructuring:
const fruits = ['apple', 'banana', 'cherry'];
const [first, second, third] = fruits;

console.log(first); // 'apple'
console.log(second); // 'banana'
console.log(third); // 'cherry'


const person = { name: 'Alice', age: 25, city: 'New York' };
const { name, age, city } = person;

console.log(name); // 'Alice'
console.log(age); // 25
console.log(city); // 'New York'
*/
    
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
                    <label htmlFor="category">Search business category: </label>
                    <input type="text" id="category" onChange={handleCategory} />
                    <br />
                    <label htmlFor="location">City: </label>
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

