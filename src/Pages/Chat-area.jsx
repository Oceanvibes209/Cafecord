import { useState } from 'react';
import { Link } from "react-router-dom";
import "../Styles/Chat.css"
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import SideMenu from './SideMenu';

function Chat() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

  return (
    <div className='background'>
      <div className='SideMenu'>
        <SideMenu />
        <div className="button-container">
          <Button
            id='ChatBtn'
            className="btn btn-primary"
            type="Button"
            onClick={handleOffcanvasToggle}
          >
            Edit Profile Button
          </Button>
  
          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            placement="end"
            scroll={true}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Edit Profile</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p>Choose a new avatar.</p>
            </Offcanvas.Body>
          </Offcanvas>
          <Link to='/Login'>
            <Button id='ChatBtn' variant="btn btn-info">
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Chat;
