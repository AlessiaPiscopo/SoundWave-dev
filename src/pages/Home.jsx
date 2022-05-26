import { Link, useNavigate } from "react-router-dom";
import Explore from "./Explore";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* <div className="wave-dark"></div> */}

      <main className="welcome-container">
        <h1 className="logo-text">SoundWave</h1>
        <div className="about-us">
          <h2 className="about-us-heading">
            A space for independent musicians
          </h2>
        </div>

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
        <Link to="/artist-profile" style={{ color: "var(--light)" }}>
          My Profile
        </Link>
        <Link to="/explore" style={{ color: "var(--light)" }}>
          Explore
        </Link>
      </main>
    </div>
  );
};

export default Home;

/* <div className="about-us-sub-headings">
            <h3>
              showcase your work, discover new music, support other artists, and
              build meaningful connections.
            </h3>
          </div> */

/* Artists & Fans: An online record store and music community where passionate fans discover, connect with, and directly support the artists they love. */
