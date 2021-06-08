import React, { useEffect, useState } from 'react';

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
  // Restaurant information
  const [ restaurantName, setRestaurantName ] = useState("");
  const [ restaurantImage, setRestaurantImage ] = useState("");
  const [ restaurantCategories, setRestaurantCategories ] = useState([]);
  const [ restaurantYelp, setRestaurantYelp ] = useState("https://yelp.com");

  // User input
  const [ location, setLocation ] = useState("");

  // Conditional rendering
  const [ showRestaurantCard, setShowRestaurantCard ] = useState(false);
  const [ showLoading, setShowLoading ] = useState(false);

  const onSearchClick = () => {
    if (location) {
      setShowLoading(true);
      const API_URL = `${SERVER_BASE_URL}/${location}`
      fetch(API_URL)
        .then(response => response.json())
        .then(restaurant => {
          console.log(restaurant)
          setRestaurantName(restaurant.name);
          setRestaurantImage(restaurant.image_url);
          setRestaurantCategories([
            ...restaurant.categories.map(category => category.title),
            `${restaurant.rating} stars on yelp`
          ]);
          setRestaurantYelp(restaurant.url);
          setShowLoading(false);
          setShowRestaurantCard(true);
        });
    }
  };

  // Wake up Heroku server
  const SERVER_BASE_URL = "https://indecisive-diners-server.herokuapp.com";
  useEffect(() => {
    fetch(`${SERVER_BASE_URL}/evanston`)
        .then(console.log("heroku awake"));
  }, [ SERVER_BASE_URL ]);

  return (
    <ThemeProvider value={theme}>
      <div id="page">
        <Header />
        <LocationInput 
          setLocation={setLocation}
          onSearchClick={onSearchClick}
          showLoading={showLoading}
        />
        <RestaurantCard
          onSearchClick={onSearchClick}
          restaurantName={restaurantName}
          restaurantImage={restaurantImage}
          restaurantCategories={restaurantCategories}
          restaurantYelp={restaurantYelp}
          showRestaurantCard={showRestaurantCard}
          setShowRestaurantCard={setShowRestaurantCard}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
