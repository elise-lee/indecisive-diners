import React from 'react';
import { Badge, Dialog } from "evergreen-ui";
import './RestaurantCard.css';

function RestaurantCard({
  restaurantName,
  restaurantImage,
  restaurantCategories,
  showRestaurantCard,
  setShowRestaurantCard
}) {
  return (
    <Dialog
        topOffset={"10vh"}
        isShown={showRestaurantCard}
        title={`What about ${restaurantName}?`}
        onCloseComplete={() => setShowRestaurantCard(false)}
        hasClose={false}
        confirmLabel="View on Yelp"
      >
        <div id="restaurant-card">
          <div id="restaurant-img-wrapper">
            <img id="restaurant-img" src={restaurantImage} alt={restaurantName} />
          </div>
          <div id="restaurant-categories-wrapper">
            {restaurantCategories.map(category => {
              return (
                <Badge color="neutral" key={category} marginRight={8}>
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
