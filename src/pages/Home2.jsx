import "../styles/Home2.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home2 = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <header className="home-header">
        <span className="logo-icon">SW</span>
        <div className="nav-items-right">
          <span>About Us</span>
          <span>Explore</span>
          <span>Sign In</span>
        </div>
      </header> */}
      <div className="home-content">
        {/* serif normal */}
        <span className="logo-text">SoundWave</span>
        <p className="slogan-heading">A space for independent artists.</p>
        <p className="about-blurb">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          exercitationem labore dolores laboriosam doloribus atque accusantium
          amet eaque ea porro, iste voluptatem id, accusamus, ex fuga hic
          tenetur est ipsum.
        </p>
        <div className="buttons-row">
          <button className="sign-up-button">
            <Link to="/artist-sign-up">Sign Up</Link>
          </button>
          <button className="sign-in-button">
            <Link to="/artist-sign-in">Sign In</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home2;
<div className="home">
  <span>Welcome to SoundWave</span>
</div>;
