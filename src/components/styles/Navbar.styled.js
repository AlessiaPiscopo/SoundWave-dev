import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button.styled";
import { Container } from "../Container.styled";
import { IoSearchSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

export const StyledNavbar = styled(Container)`
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.span`
  font-size: 48px;
  font-family: Dokdo, "Roboto Mono", monospace;
  color: var(--opal);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: var(--opal);
  margin-left: 10px;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 45px;
  flex-wrap: wrap;
  font-size: 14px;
  color: var(--light);
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
`;

export const SearchIcon = styled(IoSearchSharp)`
  width: 20px;
  height: 20px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const UserIcon = styled(FiUser)`
  width: 20px;
  height: 20px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const SignInButton = styled(Button)`
  color: #ec4067;
  border: 1px solid #ec4067;
`;
