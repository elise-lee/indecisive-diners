import React, { useState } from 'react';

// Components
import Header from './components/Header/Header';
import LocationInput from './components/LocationInput/LocationInput';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import Footer from './components/Footer/Footer';

// Styling
import theme from "./utils/theme";
import { ThemeProvider } from 'evergreen-ui';
import './App.css';

function App() {
  const [ restaurantName, setRestaurantName ] = useState("");
  const [ restaurantImage, setRestaurantImage ] = useState("");
  const [ restaurantCategories, setRestaurantCategories ] = useState([]);
  const [ showRestaurantCard, setShowRestaurantCard ] = useState(false)

  return (
    <ThemeProvider value={theme}>
      <div id="page">
        <Header />
        <LocationInput 
          setRestaurantName={setRestaurantName}
          setRestaurantImage={setRestaurantImage}
          setRestaurantCategories={setRestaurantCategories}
          setShowRestaurantCard={setShowRestaurantCard}
        />
        <RestaurantCard
          restaurantName={restaurantName}
          restaurantImage={restaurantImage}
          restaurantCategories={restaurantCategories}
          showRestaurantCard={showRestaurantCard}
          setShowRestaurantCard={setShowRestaurantCard}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
