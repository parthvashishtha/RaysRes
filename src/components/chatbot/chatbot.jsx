import React, { useState } from "react";
import "./chatbot.css";
import chatIcon from "./chaticon.png";
import axios from "axios";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      const newMessage = { sender: "user", text: message };
      setChatHistory([...chatHistory, newMessage]);
      setMessage("");

      try {
        const response = await axios.post(
          "http://localhost:5000/send-message",
          { message: message }
        );

        const botMessage = { sender: "bot", text: response.data.message };
        setChatHistory((prevChatHistory) => [...prevChatHistory, botMessage]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handlePredefinedResponse = (text) => {
    const newMessage = { sender: "user", text: text };
    setChatHistory([...chatHistory, newMessage]);

    const botMessage = { sender: "bot", text: `You clicked: ${text}` };
    setChatHistory((prevChatHistory) => [...prevChatHistory, botMessage]);
  };

  return (
    <div className="chat-widget-container">
      {!isOpen ? (
        <div className="chat-icon" onClick={handleToggle}>
          <img src={chatIcon} alt="Chat Icon" />
        </div>
      ) : (
        <div className="chat-window">
          <div className="chat-header-container">
            <div className="chat-header">
              <span>Rays Syon</span>
              <button className="close-btn" onClick={handleToggle}>
                &times;
              </button>
            </div>
            <div className="chat-subheader">
              <span>Welcome! How can we assist you today?</span>
            </div>
          </div>
          <div className="chat-body">
            <div className="chat-history">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`chat-message ${chat.sender}`}>
                  <p>{chat.text}</p>
                </div>
              ))}
            </div>
            <div className="chat-buttons">
              <button onClick={() => handlePredefinedResponse("Product Info")}>
                Product Info
              </button>
              <button onClick={() => handlePredefinedResponse("Pricing")}>
                Pricing
              </button>
              <button onClick={() => handlePredefinedResponse("Support")}>
                Support
              </button>
              <button onClick={() => handlePredefinedResponse("Features")}>
                Features
              </button>
              <button onClick={() => handlePredefinedResponse("Contact Us")}>
                Contact Us
              </button>
              <button onClick={() => handlePredefinedResponse("Other")}>
                Other
              </button>
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message..."
              />
              <button onClick={handleSendMessage}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
