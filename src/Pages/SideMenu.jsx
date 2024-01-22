import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="avatar-container">
        <div className="avatar"></div>
        <p className='username'>AntoniaLatte</p>
      </div>
      <ul className="channel-list">
        <li className="channel-heading">Channel</li>
        <li><Link to="/channel/channel1">Channel 1</Link></li>
        <li><Link to="/channel/channel2">Channel 2</Link></li>
        <li><Link to="/channel/channel3">Channel 3</Link></li>
        <li><Link to="/channel4">Channel 4</Link></li>
        <li><Link to="/channel5">Channel 5</Link></li>
        <li><Link to="/newchannel">+ Start New Channel</Link></li>
      </ul>
    </div>
  );
};

export default SideMenu;

