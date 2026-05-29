import Robotimg from './assets/robot.png'
import Userimg from './assets/user.png'
    export  function ChatMessage(props) {
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