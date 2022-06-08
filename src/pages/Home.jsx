import "./Home.css";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        {/* <span className="logo-text">SoundWave</span> */}
        <p className="home-heading">A space for independent artists.</p>
        <p className="home-subheading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          exercitationem labore dolores laboriosam doloribus atque accusantium
          amet eaque ea porro, iste voluptatem id, accusamus, ex fuga hic
          tenetur est ipsum.
        </p>
        <p className="home-subheading">
          Iure exercitationem labore dolores laboriosam doloribus atque
          accusantium amet eaque ea porro, iste voluptatem id, accusamus, ex
          fuga hic tenetur est ipsum.
        </p>
        <p className="home-subheading">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui commodi
          voluptates ex, similique consequuntur delectus distinctio doloribus
          soluta voluptas est inventore atque provident. Odio nisi ad labore,
          cumque fugiat magni?
        </p>
        <div className="buttons-row">
          <button className="sign-up-button">Sign Up</button>
          <button className="sign-in-button">Sign in</button>
          <button className="sign-up-button">Learn More</button>
          <FiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Home;

// showcase your work, discover new music, support other artists, and
// build meaningful connections.

/* Artists & Fans: An online record store and music community where passionate fans discover, connect with, and directly support the artists they love. */
