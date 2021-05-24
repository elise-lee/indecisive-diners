import React from 'react';
import { Button, SearchInput } from 'evergreen-ui';
import SearchButton from './../SearchButton/SearchButton';
import './LocationInput.css';

function LocationInput() {
  return (
    <div id="location-input">
      <SearchInput />
      <Button marginLeft={12}>decide, please!</Button>
    </div>
  );
}

export default LocationInput;
