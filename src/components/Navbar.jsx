// import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

import "../styles/Navbar.css";

// hide on Home page
const Navbar = () => {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  const { loggedIn, checkingStatus } = useAuthStatus();

  return (
    <nav className="styled-navbar">
      <div className="navbar-container">
        <div className="navbar-logo">SoundWave</div>
        {/* <button className="nav-bars-icon"></button> */}

        <ul className="nav-items">
          {/* <li className="nav-item">
              <Link className="navbar-logo" to="/">
                SoundWave
              </Link>
            </li> */}
          <li className="nav-item">
            <Link className="navbar-link" to="/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-link" to="/">
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-link" to="/">
              Contact
            </Link>
          </li>

          <div className="navbar-sign-in-button-container">
            {" "}
            <button className="navbar-sign-in-button">Sign In</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
