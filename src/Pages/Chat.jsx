import { useState, useEffect, useRef, useContext} from 'react';
// import { Link } from "react-router-dom";
import "../Styles/Chat.css"
import Button from 'react-bootstrap/Button'
import AvatarContext from './AvatarContext';
import SideMenu from './SideMenu';

function Chat() {

  const { selectedAvatar } = useContext(AvatarContext);

  const [messages, setMessages] = useState([]);

  function deleteMessage(messageId) {
    // Confirm deletion (you can customize this part)
    if (window.confirm("Are you sure you want to delete this message?")) {
      // Filter out the message to be deleted
      const updatedMessages = messages.filter(message => message.id !== messageId);
  
      // Update the messages state
      setMessages(updatedMessages);
  
      // Update the messages in local storage
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
    }
  }
  
  function deleteDomMessage(button) {
    // Get the parent message element
    var message = button.closest('.messages');
    // Confirm deletion (you can customize this part)
    if (confirm("Are you sure you want to delete this message?")) {
      // Remove the message element
      message.remove();
    }
  }

  function addMessage() {
    // Get the message text from the input field
    const messageText = document.querySelector('.text-input').value.trim();

    // Only proceed if the message is not empty
    if (messageText) {
      // Create a new message object
      const newMessage = {
        id: Date.now(), // simple unique identifier
        text: messageText,
        sender: 'currentUser', // You might want to dynamically set this
        timestamp: new Date().toLocaleTimeString(),
      };

      // Add the new message to the messages state


      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);

       // Save updated messages to local storage
       localStorage.setItem('messages', JSON.stringify(updatedMessages));

      // Clear the input field
      document.querySelector('.text-input').value = '';

    }
  }

  function handleKeyPress(e) {
    // Check if the Enter key is pressed and not the Shift key
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents the default action of Enter key (new line)
      addMessage(); // Calls the function to add a message
    }
  }

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(savedMessages);
  }, []);

  

  return (
    <div className='chatBackground'>

      <SideMenu/> {/* Antonia's Side Menu*/}

      {/* <div className='SideMenu'>
        <Link to={'/EditProfile'}><Button className="btn btn-primary side-btn" type="Button">Edit Profile</Button></Link>
        <Link to={'/Login'}><Button className="side-btn" variant="info"><p>Logout</p></Button>{' '}</Link>
        <Link to={'/group-form'} className='side-btn'><Button>Create Group</Button></Link>
      </div> */}

      <div className='ChatMainBody'>
        <div className='chat-title'>
          <img className='chatLogo' src="/assets/cafeLogo2.jpg" />
          <h1>Cafecord</h1>
        </div>

        <div className='messages sent'>
          <div className="message-info">
            <Button className="btn btn-danger mobile-deleteBtn" type="Button" onClick={(e) => deleteDomMessage(e.target)}>
              x
            </Button>
            <img src='/Avatars/Beeo-o.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>Cafevibes209</p>
                <p className='timestamp'>Sent 12:03:09 PM</p>
                <Button className="btn btn-danger deleteBtn" type="Button" onClick={(e) => deleteDomMessage(e.target)}>
                  X
                </Button>
              </div>
              <p>Hey Antonia! How is the new French press?</p>
            </div>
          </div>
        </div>

        <div className='messages received'>
          <div className="message-info">
            <Button className="btn btn-danger mobile-deleteBtn" type="Button" onClick={(e) => deleteDomMessage(e.target)}>
              x
            </Button>
            <img src='/Avatars/cafeart.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>AntoniaLatte</p>
                <p className='timestamp'>Sent 12:09:43 PM</p>
                <Button className="btn btn-danger deleteBtn" type="Button" onClick={(e) => deleteDomMessage(e.target)}>
                  X
                </Button>
              </div>
              <p>Its working well! Im making a second cup lol!</p>
            </div>
          </div>
        </div>


        <div className='messages received' key={messages.id}>
          <div className="message-info">
            <Button

              className="btn btn-danger mobile-deleteBtn"
              type="Button"
              onClick={(e) => deleteDomMessage(e.target)}
            >
              x
            </Button>
            <img src='/Avatars/computerDog.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>AustinBrew</p>
                <p className='timestamp'>Sent 12:15:04 PM</p>
                <Button

                  className="btn btn-danger deleteBtn"
                  type="Button"
                  onClick={(e) => deleteDomMessage(e.target)}

                >
                  X
                </Button>
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
          </div>
        </div>

        {/* Dynamic rendering of messages starts here */}
        {messages.map((message) => (
          <div className='messages sent' key={message.id}>
            <div className="message-info">
              <Button

                className="btn btn-danger mobile-deleteBtn"
                type="Button"
                onClick={() => deleteMessage(message.id)}

              >
                x
              </Button>

              <img src={selectedAvatar || '/Avatars/Beeo-o.jpg'} alt="User Avatar" /> {/* Update avatar as needed */}
              <div className='message-structure'>
                <div className="message-details">
                  <p>CafeVibes209{/*message.sender*/}</p> {/* Replace with actual sender name */}
                  <p className='timestamp'>Sent {message.timestamp}</p>
                  {/* Delete button and other message details */}
                  <Button className="btn btn-danger deleteBtn" type="Button" onClick={() => deleteMessage(message.id)}>X</Button>
                </div>
                <p>{message.text}</p>
              </div>
            </div>
            <div ref={messagesEndRef} /> {/* Empty div for scrolling */}
          </div>
        ))}
        {/* Dynamic rendering of messages ends here */}


        <textarea className='text-input' type='text' placeholder='Enter Message' onKeyDown={handleKeyPress}></textarea>
        <button className='sendBtn' onClick={(e) => addMessage(e.target)}>Send</button>


      </div>
    </div>
  );
}

export default Chat;