import './App.css';
import React, {useState, useEffect} from 'react';
import BusinessList from './Components/BusinessList/BusinessList.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import searchBusinesses from './utils/API.js';



function App() {
  
    const [businesses, setBusinesses] = useState([]);
  
    useEffect(() =>{
      const fetchData = async () => {
        const businessData = await searchBusinesses();

        const transformedBusinesses = businessData.map(business => ({
          id: business.id,
          image: business.imageSrc,
          name: business.name,
          address: business.address,
          city: business.city,
          state: business.state,
          zipcode: business.zipcode,
          category: business.category,
          rating:business.rating,
          reviewCount:business.reviewCount
        }));

        setBusinesses(transformedBusinesses);
      };

      fetchData();
    }, []);
    

    
  
  return (
    <div className="App">
      <div className='Heading'>
        <h1>Ravenous</h1>
      </div>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}


export default App;


