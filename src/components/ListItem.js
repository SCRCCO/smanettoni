import React from 'react';
import './ListItem.css';

const ListItem = ({ title, description, price, imageUrl }) => {
  return (
    <div className="announcement">
      <div className="announcement-image">
        <img src={imageUrl} alt="Announcement" />
      </div>
      <div className="announcement-details">
        <h2 className="announcement-title">{title}</h2>
        <p className="announcement-description">{description}</p>
        <p className="announcement-price">Price: ${price}</p>
        <button className="announcement-button">Contact Seller</button>
      </div>
    </div>
  );
};

export default ListItem;
