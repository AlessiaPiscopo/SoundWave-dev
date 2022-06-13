import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  background-color: transparent;
  border: 1px solid var(--dark);
  border-radius: 3px;
  padding: 10px 10px;
  /* font-weight: bold; */
  /* font-size: 16px; */

  &:hover {
    transform: scale(0.98);
    transition: ease-in-out 0.1s;
  }
`;
