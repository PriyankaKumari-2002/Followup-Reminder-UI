import React, { useState } from 'react';

const FollowupForm = ({ onFormSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [message, setMessage] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!customerName || !customerEmail || !message || !dateTime) {
      return;
    }

    const reminder = {
      id: Date.now(),
      customerName,
      customerEmail,
      message,
      dateTime,
    };

    onFormSubmit(reminder);
    setCustomerName('');
    setCustomerEmail('');
    setMessage('');
    setDateTime('');
  };

  return (
    <div className="followup-form-container">
      <h2>Follow-up Reminder</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Customer Name:</label>
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Customer Email:</label>
          <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date & Time:</label>
          <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        </div>
        <button type="submit" className="submit-button">
          Schedule Reminder
        </button>
      </form>
    </div>
  );
};

export default FollowupForm;
