import React from 'react';
import './Message.css';

function Message({ message }) {
  const isUser = message.sender === 'user';

  return (
    <div className={`message-container ${isUser ? 'user' : 'bot'}`}>
      {!isUser && <span className="avatar-small">🤖</span>}
      <div className={`message-bubble ${isUser ? 'user-message' : 'bot-message'}`}>
        <p>{message.text}</p>
        <span className="message-time">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      {isUser && <span className="avatar-small">👤</span>}
    </div>
  );
}

export default Message;
