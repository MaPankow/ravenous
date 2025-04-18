import './App.css';
import React, {useState} from 'react';
import BusinessList from './Components/BusinessList/BusinessList.js';
import SearchBar from './Components/SearchBar/SearchBar.js';




function App() {
  
  const [businesses, setBusinesses] = useState([]);

  return (
    <div className="App">
      <div className='Heading'>
        <h1>Ravenous</h1>
      </div>
      <SearchBar setBusinesses={setBusinesses} businesses={businesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
}


export default App;


