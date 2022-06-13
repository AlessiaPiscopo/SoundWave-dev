import styled from "styled-components";
import bgImg from "../../assets/photos/keagan-henman-1.png";
import { Button } from "../../components/Button.styled";
import { IoChevronForward } from "react-icons/io5";

export const StyledHome = styled.div`
  background-color: var(--dark);
  height: 100vh;
  /* background-image: linear-gradient(
      to left bottom,
      rgba(100, 210, 204, 0.5 ),
      rgba(172, 210, 204, 0.8)
    ),
    url(${bgImg}); */
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
  /* clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%); */
`;

export const ContentBox = styled.section`
  width: 600px;
  position: absolute;
  top: 150px;
  color: var(--light);
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-family: "Playfair Display", "PT Serif", "Roboto Mono", monospace;
  font-size: 45px;
  font-weight: 800;
  line-height: 1.15;
  padding-bottom: 20px;
`;

export const SubHeading = styled.h2`
  padding: 10px 0 5px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: -10px 0 25px;
  /* margin-bottom: 20px; */
`;

export const SignUpButton = styled(Button)`
  color: #ec4067;
  border: 1px solid #ec4067;
  width: 200px;
  padding: 12px;
  font-weight: bold;
`;

export const ForwardIcon = styled(IoChevronForward)``;

// export const LogoText = styled.span`
//   font-size: 130px;
//   font-family: Dokdo, "Roboto Mono", monospace;
//   -webkit-text-fill-color: transparent;
//   -webkit-text-stroke-width: 2px;
//   -webkit-text-stroke-color: var(--opal);
//   margin-left: 10px;
// `;
