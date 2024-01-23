//added by Calicia to test avatar selection
import { useState } from 'react';
import "../Styles/Chat.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//import ToggleButton from 'react-bootstrap/ToggleButton';
//import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Chat() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  //maybe  a map() function?

  /* function handleClick() {
    console.log("Button was clicked!")
    //(see Scrimba for button accessibility)
  }
 */

  
  return (
    <div>
      <h3>Chat area</h3>
      {/* Button to open react-bootstrap modal to user's edit profile, button has been customized using variant */}
      <Button variant="open-modal" onClick={handleShow}>
        Edit Profile
      </Button>

      {/* Modal area for user to edit profile */}
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            {/* Edit/Change username form*/}
            <Form.Group className="mb-3" controlId="userForm.ControlInput1">
              <Form.Label>Change Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="New username..."
                autoFocus
              />
            </Form.Group>

            {/* Avatar selection form using radio buttons with avatar images*/}
            <p>Select avatar</p>
            <div className= "avatar-form">
              <p className="avatar-form--hide">Select avatar</p>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label= {<img src= '/images/Beeo-o.jpg' alt='social-media-cafe' width='125px' height='125px'/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />

                  <Form.Check
                    inline
                    label={<img src= '/images/cafeart.jpg' alt='cafe-friends' width='125px' height='125px'/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />

                  <Form.Check
                    inline
                    label={<img src= '/images/cafeart2.jpg' alt='lady-holding-coffee' width='125px' height='125px'/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />

                  <Form.Check
                    inline
                    label={<img src= '/images/computerDog.jpg' alt='coding-dog' width='125px' height='125px'/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                
                </div>
              ))}
            </div>
          </Form>
          {/* Note: api radio buttons for avatar options
          problem: looked like it good be a good option for styling purposes, but ran into issue where could NOT deselect radio buttons once selected
          {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check type={type} id={`check-api-${type}`}>
                  <Form.Check.Input type={type} isValid />
                  <Form.Check.Label><img src= '/images/Beeo-o.jpg' alt='cafe-friends' width='70px' height='70px'/></Form.Check.Label>
                  <Form.Control.Feedback type="valid">
                    Choose this avatar!
                  </Form.Control.Feedback>
                </Form.Check>
              </div>
      ))} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="avatar-close" onClick={handleClose}>
            Close
          </Button>
          <Button variant="avatar-save" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Chat;