import './NavToggle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

const NavToggle = () => {
    return (
        <div className="toggle-button-parent">
            <div className="icon-container">
                <FontAwesomeIcon icon={faAnglesLeft} className="icon" />
            </div>
        </div>
    );
};

export default NavToggle;