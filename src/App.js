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
  const [ restaurantYelp, setRestaurantYelp ] = useState("https://yelp.com");
  const [ restaurantCoordinates, setRestaurantCoordinates ] = useState([0,0])
  const [ location, setLocation ] = useState("");
  const [ showRestaurantCard, setShowRestaurantCard ] = useState(false);

  const onSearchClick = () => {
    if (location) {
      const API_URL = `https://indecisive-diners-server.herokuapp.com/${location}`
      console.log(API_URL);
      fetch(API_URL)
        .then(response => response.json())
        .then(restaurant => {
          console.log(restaurant);
          setRestaurantName(restaurant.name);
          setRestaurantImage(restaurant.image_url);
          setRestaurantCategories([
            ...restaurant.categories.map(category => category.title),
            `${restaurant.rating} stars on yelp`
          ]);
          setRestaurantYelp(restaurant.url);
          setRestaurantCoordinates([
            restaurant.coordinates.latitude,
            restaurant.coordinates.longitude
          ]);
          console.log(restaurant.url)
          setShowRestaurantCard(true);
        });
    }
  };

  return (
    <ThemeProvider value={theme}>
      <div id="page">
        <Header />
        <LocationInput 
          setLocation={setLocation}
          onSearchClick={onSearchClick}
        />
        <RestaurantCard
          onSearchClick={onSearchClick}
          restaurantName={restaurantName}
          restaurantImage={restaurantImage}
          restaurantCategories={restaurantCategories}
          restaurantYelp={restaurantYelp}
          restaurantCoordinates={restaurantCoordinates}
          showRestaurantCard={showRestaurantCard}
          setShowRestaurantCard={setShowRestaurantCard}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
