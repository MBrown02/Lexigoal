import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/">Home</a></li>
                <li className="navbar-item"><a href="/about">About</a></li>
                <li className="navbar-item"><a href="/services">Services</a></li>
                <li className="navbar-item"><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;