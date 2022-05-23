import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="wave-dark"></div>

      <main className="welcome-container">
        <h1 className="logo-text">SoundWave</h1>
        <div className="about-us">
          <h2 className="about-us-heading">
            A community for independent artists
          </h2>
          <div className="about-us-sub-headings">
            <h3>Showcase your work. Discover new music. </h3>
            <h3>Build meaningful connections.</h3>
          </div>
        </div>
        {/* Artists & Fans: An online record store and music community where passionate fans discover, connect with, and directly support the artists they love. */}
        <button
          className="sign-up-button"
          onClick={() => navigate("/artist-sign-up")}
        >
          Sign Up
        </button>
        <button
          className="sign-in-button"
          onClick={() => navigate("/artist-sign-in")}
        >
          Sign In
        </button>
      </main>
    </div>
  );
};

export default Home;
