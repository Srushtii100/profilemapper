import React, { useState } from 'react';
import './App.css';
import ProfileList from './components/ProfileList';
import SearchBar from './components/SearchBar';

// Sample data
const profiles = [
  { id: 1, name: 'John Doe', photo: '/images/john.jpg', description: 'Software Engineer', address: 'New York, USA' },
  { id: 2, name: 'Jane Smith', photo: '/images/jane.jpg', description: 'Designer', address: 'London, UK' },
  // Add more profiles here...
];

function App() {
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleSearch = (query) => {
    setFilteredProfiles(
      profiles.filter((profile) => profile.name.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="App">
      <h1>Profile Mapper</h1>
      <SearchBar onSearch={handleSearch} />
      <ProfileList profiles={filteredProfiles} />
    </div>
  );
}

export default App;


