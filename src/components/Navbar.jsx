import {
  StyledNavbar,
  Nav,
  LogoText,
  NavItems,
  SignIn,
} from "./styles/Navbar.styled.js";

const Navbar = () => {
  return (
    <StyledNavbar className="StyledNavbar">
      <Nav>
        <LogoText>SoundWave</LogoText>
        <NavItems>
          <li>_About</li>
          <li>_Explore</li>
          <li>_Contact Us</li>
        </NavItems>
      </Nav>
      {/* <SignIn>Sign In</SignIn> */}
    </StyledNavbar>
  );
};

export default Navbar;
