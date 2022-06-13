import { useNavigate } from "react-router-dom";

import {
  StyledHome,
  ContentBox,
  LogoText,
  Heading,
  SubHeading,
  SignUpButton,
} from "./styles/Home.styled";
import { Container as PageContainer } from "../components/Container.styled";
import { IoArrowForward } from "react-icons/io5";

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
            passionate fans discover, connect with, and directly support the
            artists they love.
          </SubHeading>
          <div>
            <SignUpButton
              type="button"
              onClick={() => navigate("/artist-sign-in")}
            >
              Sign Up
            </SignUpButton>
            <span>
              Learn More
              <IoArrowForward />
            </span>
          </div>
        </ContentBox>
      </PageContainer>
    </StyledHome>
  );
};

export default Home;

// showcase your work, discover new music, support other artists, and
// build meaningful connections.

/* Artists & Fans: An online record store and music community where passionate fans discover, connect with, and directly support the artists they love. */

{
  /* <div className="home">
<div className="home-content">
  <p className="home-heading">A space for independent artists.</p>
  <p className="home-subheading">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
    commodi voluptates ex, similique consequuntur delectus distinctio
    doloribus soluta voluptas est inventore atque provident. Odio nisi
    ad labore, cumque fugiat magni?
  </p>
  <button className="sign-up-button">Sign Up</button>
</div>
</div> */
}
