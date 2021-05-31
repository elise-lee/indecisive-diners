import React, { useState } from 'react';
import { Button, SearchInput } from 'evergreen-ui';
import './LocationInput.css';

function LocationInput({
  setRestaurantName,
  setRestaurantImage,
  setRestaurantCategories,
  setShowRestaurantCard
}) {
  const [ location, setLocation ] = useState("");

  const onSearchClick = () => {
    const API_URL = `http://localhost:5000/${location}`
    console.log(API_URL);
    fetch(API_URL)
      .then(response => response.json())
      .then(restaurant => {
        console.log(restaurant);
        setRestaurantName(restaurant.name);
        setRestaurantImage(restaurant.image_url);
        setRestaurantCategories(restaurant.categories.map(category => category.title));
        setShowRestaurantCard(true);
      });
  };

  return (
    <div id="location-input">
      <SearchInput
        placeholder="First, what's your location?" 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <Button
        marginLeft={12}
        onClick={onSearchClick}>
          Decide, please!
      </Button>
    </div>
  );
}

export default LocationInput;
