import React from 'react';
import './TicketCard.css'; // Import the CSS file for styling

const TicketCard = ({ ticketType, age, price, onBuyNowClick }) => {
  return (
    <div className="TicketCard-container">

    <div className="ticket-card">
        <div className='card-header'>

      <h2 >{ticketType} Ticket </h2>
     
        </div>

      <div className="card-body">

      <p className="details">Valid for one person</p>
      <span>{age}</span>
      <p className="price">{price} SEK</p>
        <button className="buy-button" onClick={onBuyNowClick}>Buy Now</button>
      </div>
    </div>
    </div>
  );
};

export default TicketCard;
