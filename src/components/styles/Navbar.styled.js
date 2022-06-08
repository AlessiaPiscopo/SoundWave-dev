import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 80px;
  margin: auto;
  font-size: 14px;
`;

export const Nav = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 45px;
`;

export const LogoTextOutline = styled(Link)`
  font-size: 48px;
  font-family: Dokdo, "Roboto Mono", monospace;
  color: var(--opal-light);
  -webkit-text-fill-color: rgba(16, 16, 16, 0);
  -webkit-text-stroke-color: var(--opal-light);
  -webkit-text-stroke-width: 1.5px;

  &:hover {
    color: var(--opal-light);
    cursor: pointer;
    -webkit-text-fill-color: var(--opal-light);
    transition: ease-in 0.2s;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;

  gap: 70px;
  font-weight: bold;
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    color: var(--opal-light);
    cursor: pointer;
    -webkit-text-fill-color: var(--opal-light);
    transition: ease-in 0.2s;
  }
`;

export const SignInButton = styled.button`
  background-color: transparent;
  color: var(--light);
  padding: 10px 10px;
  font-weight: bold;

  &:hover {
    color: var(--dark);
    background-color: var(--opal-light);
    border: 1px solid var(--dark);
    transition: ease-in 0.2s;
  }
`;
