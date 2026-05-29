import { useState,useEffect,useRef } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage'
import './App.css'


   function ChatMessages({ chatMessages }) {
        return (
          <>
            {chatMessages.map((msg) => {
              return <ChatMessage key={msg.id} message={msg.message} sender={msg.sender} />;
            })}
          </>
        );
   }

function App() {
   const [chatMessages, setChatMessages] = useState([]);
        //const chatMessages = array[0];
        //const setChatMessages = array[1];
        // const [chatMessages, setChatMessages] = array;
        const messagesEndRef = useRef(null);
        useEffect(() => {
          messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }, [chatMessages]);
        return (
          <>
            <div className="app-container">
              <h1>Chatbot</h1>

              <div className="messages-container" ref={messagesEndRef}>
                <ChatMessages chatMessages={chatMessages} />
              </div>

              <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
            </div>
          </>
        );
      
}

export default App
