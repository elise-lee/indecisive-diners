import React from 'react';
import { Button, SearchInput, Spinner } from 'evergreen-ui';
import './LocationInput.css';

function LocationInput({
  setLocation,
  onSearchClick,
  showLoading
}) {

  return (
    <div id="location-input">
      <SearchInput
        placeholder="First, what's your location?" 
        onChange={(e) => setLocation(e.target.value)} 
      />
      {showLoading ? (
        <Spinner size={24} marginLeft={12} /> 
      ) : ( 
        <Button
          marginLeft={12}
          onClick={onSearchClick}>
           Decide, please!
        </Button>
      )}
    </div>
  );
}

export default LocationInput;
