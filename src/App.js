import logo from './logo.svg';
import './App.css';

import BusinessList from './Components/BusinessList/BusinessList.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import Business from './Components/Business/Business.js';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
