import './App.css';
import React, {useState} from 'react';
import BusinessList from './Components/BusinessList/BusinessList.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import searchBusinesses from './utils/API.js';



function App() {
  
  const [businesses, setBusinesses] = useState([]);

  return (
    <div className="App">
      <div className='Heading'>
        <h1>Ravenous</h1>
      </div>
      <SearchBar setBusinesses={setBusinesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
}


export default App;


