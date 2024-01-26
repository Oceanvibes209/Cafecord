import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AvatarContext from './AvatarContext';
import "../Styles/sidemenu.css"

const SideMenu = () => {

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
        <li><Link to="/EditProfile">Edit Profile</Link></li>
        <li><Link to="/Login">Log Out</Link></li>
        <li><Link to="/CalChat">CalChat</Link></li>
      </ul>
    </div>
  );
};

export default SideMenu;