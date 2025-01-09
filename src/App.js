import logo from './logo.svg';
import './App.css';

import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';
import Business from './Components/Business';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
