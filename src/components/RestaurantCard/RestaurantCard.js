import React from 'react';
import { Badge, Dialog, Heading, Text, Tooltip } from "evergreen-ui";
import { ReactComponent as YelpIcon } from "./YELP_ICON.svg";
import { ReactComponent as GoogleMapsIcon } from "./GOOGLE_MAPS_ICON.svg";
import './RestaurantCard.css';

function RestaurantCard({
  restaurantName,
  restaurantImage,
  restaurantCategories,
  restaurantYelp,
  showRestaurantCard,
  setShowRestaurantCard,
  onSearchClick,
}) {
  const openYelp = () => {
    const newWindow = window.open(restaurantYelp, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  }

  const openGoogleMaps = () => {
    const mapsURL = 
      `https://www.google.com/maps/dir/?api=1&destination=${restaurantName}`
    const newWindow = window.open(mapsURL, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  }

  const tryAgain = async (close) => {
    await close();
    onSearchClick();
  }

  return (
    <Dialog
        topOffset={"5vh"}
        isShown={showRestaurantCard}
        hasHeader={false}
        onCloseComplete={() => setShowRestaurantCard(false)}
        hasClose={false}
        onConfirm={tryAgain}
        confirmLabel="Try again"
      >
        <div id="restaurant-card">
          <div id="header">
            <Heading is="h4" size={600} flex="1">
              What about {restaurantName}?
            </Heading>
            <div id="icons-wrapper">
              <Tooltip content={<Text>Get directions</Text>} appearance="card">
                <GoogleMapsIcon className="icon" onClick={openGoogleMaps} />
              </Tooltip>
              <Tooltip content={<Text>Visit Yelp</Text>} appearance="card">
                <YelpIcon className="icon" onClick={openYelp} />
              </Tooltip>
            </div>
          </div>
          <div id="restaurant-img-wrapper">
            <img id="restaurant-img" src={restaurantImage} alt={restaurantName} />
          </div>
          <div id="restaurant-categories-wrapper">
            {restaurantCategories.map(category => {
              return (
                <Badge color="neutral" key={category} marginTop={8} marginRight={8}>
                  # {category}
                </Badge>
              );
            })}
          </div>
        </div>
    </Dialog>
  );
}

export default RestaurantCard;
