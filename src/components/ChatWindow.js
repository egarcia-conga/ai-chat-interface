import React from 'react';
import Message from './Message';
import LoadingIndicator from './LoadingIndicator';
import './ChatWindow.css';

function ChatWindow({ messages, messagesEndRef, isLoading }) {
  return (
    <div className="chat-window">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isLoading && <LoadingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatWindow;
