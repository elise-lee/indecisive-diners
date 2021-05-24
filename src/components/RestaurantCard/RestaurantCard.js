import React from 'react';
import { Dialog } from "evergreen-ui";
import './RestaurantCard.css';

function RestaurantCard({
  showRestaurantCard,
  setShowRestaurantCard
}) {
  return (
    <div id="restaurant-card">
      <Dialog
        topOffset={"30vh"}
        isShown={showRestaurantCard}
        title="Tomate"
        onCloseComplete={() => setShowRestaurantCard(false)}
        hasCancel={false}
        hasClose={false}
        confirmLabel="try again"
      >
        Yummy Tomate!
      </Dialog>
    </div>
  );
}

export default RestaurantCard;
