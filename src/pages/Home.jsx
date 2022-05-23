import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Welcome to SoundWave</h1>
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
    </div>
  );
};

export default Home;
