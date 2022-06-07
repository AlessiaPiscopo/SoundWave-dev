import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  font-size: 14px;
`;

export const Nav = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const LogoText = styled.span`
  font-family: Dokdo, "Roboto Mono", monospace;
  font-size: 40px;
  color: var(--opal-light);
`;

export const NavItems = styled.ul`
  display: flex;
  gap: 50px;
`;

export const SignIn = styled.span`
  font-weight: bold;
`;
