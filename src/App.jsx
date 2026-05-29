import { useState,useEffect,useRef } from 'react'
import { ChatInput } from './components/ChatInput'
import Robotimg from './assets/robot.png'
import Userimg from './assets/user.png'
import './App.css'


      function ChatMessage(props) {
        // const message = props.message || "Hello! How can I assist you today?";
        // const sender = props.sender || "bot";
        const { message, sender } = props;
        /*   if(sender === "bot"){
                return(
                    <div>
                        <img src = {Robotimg} alt="Bot Avatar"
                        width="50"
                        height="50" />
                    {message}
                    </div>
                );
                }
                */
        return (
          <div className={`message ${sender}`}>
            {sender === "bot" && <img src={Robotimg} alt="Bot Avatar" />}

            <div className="message-text">{message}</div>

            {sender === "user" && <img src={Userimg} alt="User Avatar" />}
          </div>
        );
      }
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
