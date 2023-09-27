import './Navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faHome, faBrain, faLayerGroup, faGear } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isRetracted, setRetracted] = useState(false);
  const [isNavbarExtending, setIsNavbarExtending] = useState(false);
 
  const toggleRetraction = () => {
    if(isRetracted) {
      setIsNavbarExtending(true); 
    }
    setTimeout(() => {
      setRetracted(!isRetracted);
      if(!isRetracted) {
        setIsNavbarExtending(false);
      }
    }, isRetracted ? 0 : 200); // 750ms delay to match .enable-navbar-btn transition
  };

  const navItems = [
      { icon: faAnglesLeft, text: ''},
      { icon: faHome, text: 'Home' },
      { icon: faBrain, text: 'Practice' },
      { icon: faLayerGroup, text: 'Word List' },
      { icon: faGear, text: 'Settings'}
  ];

  return (
    <>
    <div className={`navbar ${isRetracted ? 'retracted' : ''} ${isNavbarExtending ? 'extending' : ''}`}>
      {navItems.map((item, index) => (
        <div key={index} className="nav-item">
          <FontAwesomeIcon 
            icon={item.icon}
            className="icon"
            onClick={index === 0 ? toggleRetraction : undefined} />
          <span className="text">{item.text}</span>
        </div>
      ))}
    </div>

    <div className={`enable-navbar-btn ${!isRetracted ? 'retracted' : ''}`}>
      <div className="nav-item">
        <FontAwesomeIcon 
          icon={faAnglesRight}
          className="icon"
          onClick={toggleRetraction} />
      </div>
    </div>
    </>
  );
};

export default Navbar;