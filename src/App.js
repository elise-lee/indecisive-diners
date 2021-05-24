import React, { useState } from 'react';

// Components
import Header from './components/Header/Header';
import LocationInput from './components/LocationInput/LocationInput';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';

// Styling
import './App.css';

function App() {
  const [ restaurant, setRestaurant ] = useState("");
  const [ location, setLocation ] = useState("");

  return (
    <div>
      <div id="page">
        <Header />
        <LocationInput />
        <RestaurantCard />
      </div>
    </div>
  );
}

export default App;
