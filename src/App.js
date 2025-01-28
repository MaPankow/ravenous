import './App.css';

import BusinessList from './Components/BusinessList/BusinessList.js';
import SearchBar from './Components/SearchBar/SearchBar.js';




function App() {

  const business = {
    id: 1,
    image:"/img/pexels-chan_walrus-941861.jpg",
    name:"Jocelyn's Fine Kitchen",
    address:"Home Street 55",
    city:"New York City",
    state:"New York",
    zipcode:"12345",
    category:"Tapas",
    rating:4.9,
    reviewCount:25
  }

  const businesses = [];

  for (let i=0; i<6; i++) {
    businesses.push({...business, id: i});
  }
  
  
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
