import React, { useState } from 'react';
import './InputArea.css';

function InputArea({ onSendMessage, isLoading }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="input-area">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message here..."
        disabled={isLoading}
        rows="1"
      />
      <button onClick={handleSend} disabled={isLoading || !input.trim()} className="send-button">
        {isLoading ? '...' : '➤'}
      </button>
    </div>
  );
}

export default InputArea;
