import React from 'react';

const Message = ({ count }) => {
  return (
    <>
      <div className="message-container">
        <p className="message">
          Congrats! You've saved <span className="message-amount">${count}</span> so far!
        </p>
      </div>
      <p className="total-count">You've saved ${count} so far.</p>
    </>
  );
}

export default Message;