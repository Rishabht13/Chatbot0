import { useState } from 'react'
import { Chatbot } from 'supersimpledev' 

 export function ChatInput({ chatMessages, setChatMessages }) {
            const [inputValue, setInputValue] = useState("");
            function saveInput(event) {
            setInputValue(event.target.value);
        }
        function send() {
          const newMessage = [
            ...chatMessages,
            {
              message: inputValue,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];
          setChatMessages(newMessage);

          const response = Chatbot.getResponse(inputValue);
          setChatMessages([
            ...newMessage,
            {
              message: response,
              sender: "bot",
              id: crypto.randomUUID(),
            },
          ]);
          setInputValue("");
        }
        function handleKeyDown(event) {
          if (event.key === "Enter") {
            send();
          }
        }

        return (
          <>
            <div className="input-container">
              <input
                type="text"
                placeholder="Type your message here..."
                value={inputValue}
                onChange={saveInput}
                onKeyDown={handleKeyDown}
              />

              <button onClick={send}>Send</button>
            </div>
          </>
        );
      }