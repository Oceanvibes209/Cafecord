import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarContext from './AvatarContext';
import "../Styles/sidemenu.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const SideMenu = () => {
  const { setSelectedAvatar } = useContext(AvatarContext);

  const selectAvatar = (avatar) => {
    if (window.confirm("Do you want to set this as your new avatar?")) {
        setSelectedAvatar(avatar);
        localStorage.setItem('selectedAvatar', avatar); // Save to local storage
    }

};

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { selectedAvatar } = useContext(AvatarContext);

  return (
    <div className="side-menu">
      <div className="avatar-container">
        <div className="avatar">
          <img src={selectedAvatar || '/Avatars/Beeo-o.jpg'} alt="User Avatar" /> {/* Update avatar as needed */}
        </div>
        <p className='username'>CafeVibes209</p>
      </div>
      <ul className="channel-list">
        <li className="channel-heading">Channel</li>
        <li><Link to="/channel/channel1">Channel 1</Link></li>
        <li><Link to="/channel/channel2">Channel 2</Link></li>
        <li><Link to="/channel/channel3">Channel 3</Link></li>
        <li><Link to="/channel4">Channel 4</Link></li>
        <li><Link to="/channel5">Channel 5</Link></li>
        <li><Link to="/newchannel">+ Start New Channel</Link></li>
        {/* <li><Link to="/EditProfile">Edit Profile</Link></li> */}
        <li><Link to="/Login">Log Out</Link></li>
        {/* <li><Link to="/CalChat">CalChat</Link></li> */}
        <li>
          <button className='editBtn'  onClick={handleShow}>
            Edit Profile
          </button>

          {/* Modal area for user to edit profile */}
          <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className='formBackground'>
              <Form >

                {/* Edit/Change username form*/}
                <Form.Group className="mb-3" controlId="userForm.ControlInput1">
                  <Form.Label className='formLabel'>Change Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New username..."
                    autoFocus
                  />
                </Form.Group>

                {/* Avatar selection form using radio buttons with avatar images*/}
                <p className='selectionTitle'>Select Avatar</p>
                <div className="avatar-form">
                  {/* <p className="avatar-form--hide">Select Avatar</p> */}
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3 formBody">
                      <Form.Check
                        inline
                        label={<img onClick={() => selectAvatar('/Avatars/coffeeBrewers.jpg')} src="/Avatars/coffeeBrewers.jpg" alt="Coffee Brewer" className="avatar-option" />}
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onClick={(e) => {
                          console.log(e.target.checked);
                        }}
                      />

                      <Form.Check
                        inline
                        label={<img onClick={() => selectAvatar('/Avatars/cafeart.jpg')} src='/Avatars/cafeart.jpg' alt='two-cafe-friends' className="avatar-option" />}
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />

                      <Form.Check
                        inline
                        label={<img onClick={() => selectAvatar('/Avatars/cafeart2.jpg')} src='/Avatars/cafeart2.jpg' alt='lady-holding-coffee' className="avatar-option" />}
                        name="group1"
                        type={type}
                        id={`inline-${type}-3`}
                      />

                      <Form.Check
                        inline
                        label={<img onClick={() => selectAvatar('/Avatars/computerDog.jpg')} src='/Avatars/computerDog.jpg' alt='coding-dog' className="avatar-option" />}
                        name="group1"
                        type={type}
                        id={`inline-${type}-4`}
                      />

                      <label>
                        <Form.Check
                          inline
                          label={<img onClick={() => selectAvatar('/Avatars/coffeeMaker2.jpg')} src='/Avatars/coffeeMaker2.jpg' alt='pink-cafe-girl' className="avatar-option" />}
                          name="group1"
                          type={type}
                          id={`inline-${type}-7`}
                        />
                      </label>


                      <Form.Check
                        inline
                        label={<img onClick={() => selectAvatar('/Avatars/coffeeBrewers2.jpg')} src='/Avatars/coffeeBrewers2.jpg' alt='boy-walking-with-coffee' className="avatar-option" />}
                        name="group1"
                        type={type}
                        id={`inline-${type}-8`}
                      />

                    </div>
                  ))}
                </div>
              </Form>
            </Modal.Body>

            <Modal.Footer className='modalFooter'>

              <Button variant="avatar-close" onClick={handleClose}>
                Close
              </Button>

              {/* <Button variant="avatar-save" onClick={handleClose}>
                Save Changes
              </Button> */}

            </Modal.Footer>
          </Modal>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;