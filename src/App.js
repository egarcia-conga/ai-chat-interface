import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import InputArea from './components/InputArea';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: generateBotResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  const generateBotResponse = (userText) => {
    const responses = [
      "That's interesting! Tell me more about that.",
      "I understand. How can I assist you further?",
      "Great question! Let me think about that...",
      "I appreciate you sharing that. Is there anything else?",
      "That's a valid point. Would you like to explore this further?",
      "Interesting perspective! What else would you like to discuss?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        <div className="chat-header">
          <div className="header-content">
            <h1>AI Assistant</h1>
            <p className="status">Online</p>
          </div>
          <div className="avatar">🤖</div>
        </div>

        <ChatWindow messages={messages} messagesEndRef={messagesEndRef} isLoading={isLoading} />

        <InputArea onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
