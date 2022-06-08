import { NavLink, useNavigate } from "react-router-dom";

import {
  StyledNavbar,
  Nav,
  LogoText,
  LogoTextOutline,
  NavItems,
  StyledNavLink,
  SignInButton,
} from "./styles/Navbar.styled.js";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledNavbar className="StyledNavbar">
        <Nav>
          {/* <LogoText>SoundWave</LogoText> */}
          <LogoTextOutline to="/">SoundWave</LogoTextOutline>

          <NavItems>
            <StyledNavLink to="/">_About</StyledNavLink>
            <StyledNavLink to="/">_Explore</StyledNavLink>
            <StyledNavLink to="/">_Placeholder</StyledNavLink>
            <StyledNavLink to="/">_Contact</StyledNavLink>

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
