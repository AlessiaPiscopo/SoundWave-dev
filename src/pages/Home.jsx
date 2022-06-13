import { useNavigate } from "react-router-dom";

// components
import {
  StyledHome,
  ContentBox,
  LogoText,
  Heading,
  SubHeading,
  LinksBottom,
  SignUpButton,
  LearnMore,
} from "./styles/Home.styled";
import { Container as PageContainer } from "../components/Container.styled";

import { IoChevronForward } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledHome>
      <PageContainer>
        <ContentBox>
          {/* <LogoText>SoundWave</LogoText> */}
          <Heading>
            Discover amazing new music and directly support the artists who make
            it.
          </Heading>
          <SubHeading>
            SoundWave is an online record store and music community where
            passionate fans can discover, connect with, and directly support the
            artists they love.
          </SubHeading>
          <LinksBottom>
            <SignUpButton
              type="button"
              onClick={() => navigate("/artist-sign-in")}
            >
              _Sign Up
            </SignUpButton>
            <LearnMore to="/explore">
              <span>_Learn More</span>
              <IoChevronForward />
            </LearnMore>
          </LinksBottom>
        </ContentBox>
      </PageContainer>
    </StyledHome>
  );
};

export default Home;

// showcase your work, discover new music, support other artists, and
// build meaningful connections.

/* Artists & Fans: An online record store and music community where passionate fans discover, connect with, and directly support the artists they love. */
