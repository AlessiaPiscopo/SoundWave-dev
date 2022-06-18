import { ReactComponent as SpiralIcon } from "../../assets/svg/spiralIcon.svg";

import {
  StyledNavbar,
  Logo,
  LogoText,
  NavItems,
  StyledNavLink,
  Icons,
  SearchIcon,
  UserIcon,
} from "./Navbar.styled";

const Navbar = () => {
  const activeStyle = {
    color: "var(--opal)",
  };

  return (
    <StyledNavbar className="StyledNavbar">
      <Logo to="/">
        <SpiralIcon width="32px" height="32px" />
        {/* add animation to make text appear from left on hover */}
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

        <Icons>
          <SearchIcon />
          {/* <UserIcon /> */}
        </Icons>
      </NavItems>
    </StyledNavbar>
  );
};

export default Navbar;
