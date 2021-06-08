import React, { useState } from 'react';
import { Button, SearchInput } from 'evergreen-ui';
import './LocationInput.css';

function LocationInput({
  setLocation,
  onSearchClick
}) {

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
