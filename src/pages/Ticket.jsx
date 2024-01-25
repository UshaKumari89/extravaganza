

import React, { useState } from 'react';
import TicketCard from '../Components/TicketCard';
import TicketModal from '../Components/TicketModal'; // Assuming you have a TicketModal component
import './Ticket.css';
import Footer from '../Components/Footer';

const Ticket = () => {
  const ticketsData = [
    { ticketType: 'Kids', age: "From age 4-9", price: 300, id: 1 },
    { ticketType: 'Adult', age: "From age 9-65", price: 500, id: 2 },
    { ticketType: 'Senior', age: '65+', price: 400, id: 3 },
    { ticketType: 'Year', age: 'All ages', price: 1000, id: 4 },
    { ticketType: 'Season', age: 'All ages', price: 500, id: 5 },
   
  ];

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [modalPrice, setModalPrice] = useState(0);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleBuyNowClick = (ticketId) => {
    const selectedTicketData = ticketsData.find((ticket) => ticket.id === ticketId);
    setSelectedTicket(selectedTicketData);
    setQuantity(1);
    setModalPrice(selectedTicketData.price);
    setIsModalOpen(true);
  };

  const handleAddTickets = () => {
    // Handle adding tickets logic here
    // You can generate an order number or perform other actions
    setIsModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    // Reset any state or perform additional cancel logic if needed
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    setModalPrice(selectedTicket ? selectedTicket.price * newQuantity : 0);
  };

  return (
    <>
    
    <div className="ticket-container">
      {ticketsData.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticketType={ticket.ticketType}
          age={ticket.age}
          price={ticket.price}
          onBuyNowClick={() => handleBuyNowClick(ticket.id)}
        />
      ))}

      {isModalOpen && selectedTicket && (
        <TicketModal
          ticket={selectedTicket}
          quantity={quantity}
          price={modalPrice}
          onAddTickets={handleAddTickets}
          onCancel={handleCancel}
          onQuantityChange={handleQuantityChange}
        />
      )}
  {isConfirmationModalOpen && (
        <div className="confirmation-modal-overlay">
          <div className="confirmation-modal">
            <h2>Order Confirmation</h2>
            <p>Ticket Type: {selectedTicket?.ticketType}</p>
            <p>Quantity: {quantity}</p>
            <p>Total Price: {modalPrice} SEK</p>
            <p>Order Number: {Math.floor(Math.random() * 100000)}</p>
            <div className="confirmation-modal-buttons">
              <button onClick={() => setIsConfirmationModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Ticket;