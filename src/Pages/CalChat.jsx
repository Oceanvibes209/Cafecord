import { useState } from 'react';
import "../Styles/CalChat.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//import FormCheck from 'react-bootstrap/FormCheck'
//import ToggleButton from 'react-bootstrap/ToggleButton';
//import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Chat() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  /* function handleClick() {
    console.log("Button was clicked!")
    //(see Scrimba for button accessibility)
  }
 */

  
  return (
    <div className='calChatBody'>
      <h3>Chat area</h3>
      {/* <Button><Link to={'/Chat'} >Chat</Link></Button> */}
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
            <p>Select Avatar</p>
            <div className= "avatar-form">
              {/* <p className="avatar-form--hide">Select Avatar</p> */}
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label= {<img src= '/Avatars/Beeo-o.jpg' alt='social-media-cafe' className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    onClick={(e) => {
                      console.log(e.target.checked);
                    }}
                  />

                  <Form.Check
                    inline
                    label={<img src= '/Avatars/cafeart.jpg' alt='two-cafe-friends'className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />

                  <Form.Check
                    inline
                    label={<img src= '/Avatars/cafeart2.jpg' alt='lady-holding-coffee'className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />

                  <Form.Check
                    inline
                    label={<img src= '/Avatars/computerDog.jpg' alt='coding-dog'className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                {/* QUality of images of these did not seem as crisp as the others                  
                  <Form.Check
                    inline
                    label={<img src= '/Avatars/cafeart4.png' alt='happy-cafe-guy'/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-5`}
                  />

                  
                  <Form.Check
                    inline
                    label={<img src= '/Avatars/cafeart3.png' alt='magical-cafe-girl'/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-6`}
                  /> */}

                  <label>
                  <Form.Check
                    inline
                    label={<img src= '/Avatars/coffeeMaker2.jpg' alt='pink-cafe-girl' className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-7`}
                  />
                  </label>
                  
                  
                  <Form.Check
                    inline
                    label={<img src= '/Avatars/coffeeBrewers2.jpg' alt='boy-walking-with-coffee' className="avatar-option" />}
                    name="group1"
                    type={type}
                    id={`inline-${type}-8`}
                  />
                
                </div>
              ))}
            </div>
          </Form>
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