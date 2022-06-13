import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SpiralIcon } from "../assets/graphics/noun-spiral.svg";
import { Container } from "./Container.styled";

import {
  StyledNavbar,
  Logo,
  LogoText,
  NavItems,
  StyledNavLink,
  Icons,
  SearchIcon,
  UserIcon,
  SignInButton,
} from "./styles/Navbar.styled.js";

const Navbar = () => {
  const navigate = useNavigate();

  const activeStyle = {
    color: "var(--opal)",
  };

  return (
    <StyledNavbar className="StyledNavbar">
      <Logo to="/">
        <SpiralIcon width="32px" height="32px" />
        {/* animation to make text appear from left on hover */}
        <LogoText>SoundWave</LogoText>
      </Logo>

      <NavItems>
        <StyledNavLink
          to="/explore"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          _About
        </StyledNavLink>
        <StyledNavLink
          to="/explore"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          _Explore
        </StyledNavLink>
        <StyledNavLink
          to="/explore"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          _Contact
        </StyledNavLink>

        {/* <SignInButton type="button" onClick={() => navigate("/artist-sign-in")}>
          Sign In
        </SignInButton> */}

        <Icons>
          <SearchIcon />
          <UserIcon />
        </Icons>
      </NavItems>
    </StyledNavbar>
  );
};

export default Navbar;
