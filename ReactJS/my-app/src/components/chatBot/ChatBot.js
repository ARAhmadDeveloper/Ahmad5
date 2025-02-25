import React, { useState, useRef, useEffect } from 'react';
import './chatBot.css';

const ChatBot = ({ isLoggedIn, userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatAreaRef = useRef(null);

  // Toggle chat window visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Send message to Grok API and handle response
  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user's message to chat
    const userMessage = { text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsBotTyping(true);

    try {
      const response = await fetch('https://api.grok.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${process.env.GROK_API_KEY}`, // Replace with your actual API key
        },
        body: JSON.stringify({
          message: inputValue,
          isLoggedIn: isLoggedIn,
          userId: isLoggedIn ? userId : null,
        }),
      });

      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      const botMessage = { text: data.response, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage = { text: 'Sorry, something went wrong. Try again!', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsBotTyping(false);
    }
  };

  // Show initial message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = isLoggedIn
        ? 'Welcome back! How can I assist you with buying or selling today?'
        : 'Hello! Log in or sign up to start buying or selling. How can I help?';
      const initialMessage = { text: greeting, sender: 'bot' };
      setMessages([initialMessage]);
    }
  }, [isOpen, isLoggedIn]);

  // Auto-scroll to the latest message or typing indicator
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages, isBotTyping]);

  return (
    <div className="chatbot-container">
      <button onClick={toggleChat} className="chat-toggle-btn">
        Chat
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Chatbot</span>
            <button onClick={toggleChat}>Minimize</button>
          </div>
          <div className="chat-area" ref={chatAreaRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isBotTyping && <div className="message bot typing">Bot is typing...</div>}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;