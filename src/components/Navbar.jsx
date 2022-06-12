import { NavLink, useNavigate } from "react-router-dom";

import {
  StyledNavbar,
  Nav,
  LogoTextOutline,
  NavItems,
  StyledNavLink,
  SignInButton,
} from "./styles/Navbar.styled.js";

const Navbar = () => {
  const navigate = useNavigate();

  const activeStyle = {
    // borderBottom: "3px solid var(--light)",
    color: "var(--opal)",
  };

  return (
    <>
      <StyledNavbar className="StyledNavbar">
        <Nav>
          {/* <LogoText>SoundWave</LogoText> */}
          <LogoTextOutline to="/">SoundWave</LogoTextOutline>

          <NavItems>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              _About
            </NavLink>

            <NavLink
              to="/explore"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              _Explore
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              _Contact
            </NavLink>

            <SignInButton
              type="button"
              onClick={() => navigate("/artist-sign-in")}
            >
              Sign In
            </SignInButton>
          </NavItems>
        </Nav>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
