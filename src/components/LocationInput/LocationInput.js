import React from 'react';
import { Button, SearchInput } from 'evergreen-ui';
import './LocationInput.css';

function LocationInput({setShowRestaurantCard}) {
  const onSearchClick = () => {
    setShowRestaurantCard(true)
  };

  return (
    <div id="location-input">
      <SearchInput />
      <Button
        marginLeft={12}
        onClick={onSearchClick}>
          decide, please!
      </Button>
    </div>
  );
}

export default LocationInput;
