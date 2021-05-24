import React, { useState } from 'react';

// Components
import Header from './components/Header/Header';
import LocationInput from './components/LocationInput/LocationInput';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';

// Styling
import theme from "./utils/theme";
import { ThemeProvider } from 'evergreen-ui';
import './App.css';

function App() {
  const [ restaurant, setRestaurant ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ showRestaurantCard, setShowRestaurantCard ] = useState(false)

  return (
    <ThemeProvider value={theme}>
      <div id="page">
        <Header />
        <LocationInput 
          setShowRestaurantCard={setShowRestaurantCard}
        />
        <RestaurantCard
          showRestaurantCard={showRestaurantCard}
          setShowRestaurantCard={setShowRestaurantCard}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
