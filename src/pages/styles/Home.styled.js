import styled from "styled-components";

import { Button } from "../../components/Button.styled";

import bgImg from "../../assets/images/guitarist-from-back.png";

export const StyledHome = styled.div`
  height: 100vh;
  background-color: var(--dark);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.8),
      /* rgba(119, 119, 119, 0.8) */ rgba(76, 108, 110, 0.8)
    ),
    url(${bgImg});
  background-size: cover;
  background-position: top;
  position: relative;
  margin-top: -80px;
  clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
`;

export const ContentBox = styled.section`
  width: 60%;
  position: absolute;
  top: 180px;
  color: var(--light);
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-family: "Playfair Display", "PT Serif", serif;
  font-size: 65px;
  font-weight: 800;
  line-height: 1.15;
  padding-bottom: 20px;
`;

export const SubHeading = styled.h2`
  padding: 10px 0 5px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: -10px 0 35px;
`;

export const LinksBottom = styled.div`
  display: flex;
`;

export const SignUpButton = styled(Button)`
  color: #ec4067;
  border: 1px solid #ec4067;
  width: 200px;
  padding: 12px;
  font-weight: bold;
  font-size: 15px;
`;

export const LearnMore = styled(SignUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  gap: 7px;
  margin-left: 30px;
  color: var(--light);
  border: 1px solid var(--grey);

  &:hover {
    border: 1px solid var(--light);
  }
`;
