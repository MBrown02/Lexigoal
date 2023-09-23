import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faHome, faBrain, faLayerGroup, faGear } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navItems = [
      { icon: faAnglesLeft, text: ''},
      { icon: faHome, text: 'Home' },
      { icon: faBrain, text: 'Words' },
      { icon: faLayerGroup, text: 'Deck' },
      { icon: faGear, text: 'Settings'}
  ];

  return (
    <div className="navbar">
      {navItems.map((item, index) => (
        <div key={index} className="nav-item">
          <FontAwesomeIcon icon={item.icon} className="icon" />
          <span className="text">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;