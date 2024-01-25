import React from 'react';
import './TicketModal.css'; // Import the CSS file for styling

const TicketModal = ({ ticket, quantity, onAddTickets, onCancel, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="ticket-modal-overlay">
      <div className="ticket-modal">
        <h2>{ticket.ticketType} Ticket Details</h2>
        <p>Price: {ticket.price * quantity} SEK</p>
        
        <p>Selected Quantity: {quantity}</p>

        <div className="quantity-adjustment">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>

        <div className="modal-buttons">
          <button onClick={onAddTickets}>Add Tickets</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;