import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import eyeOpenIcon from "../assets/icons/eyeOpenIcon.svg";

const SignIn = () => {
  // const navigate = useNavigate();

  // create a formData object with all input fields (instead of setting state for each field individually)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // then, we can destructure from the formData object to have access to each field
  const { email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);

  // dynamically sets the names and values for the new formData object
  // [ev.target.id] receives the id of "email" or "password" (which we set in the <input> elements below)—this allows us to add as many more inputs as we want without the need to target each individual field
  const handleChange = (ev) => {
    setFormData((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }));
  };

  return (
    <>
      <div className="page-container">
        <header>
          <h1 className="page-header">Welcome Back</h1>
        </header>

        <main>
          <form>
            <input
              type="email"
              className="email-input"
              placeholder="Email"
              id="email"
              value={email}
              onChange={handleChange}
            />
            <div className="password-input-div">
              <input
                type={showPassword ? "text" : "password"}
                className="password-input"
                placeholder="Password"
                id="password"
                value={password}
                onChange={handleChange}
              />

              <img
                src={eyeOpenIcon}
                alt="show password"
                className="show-password"
                onClick={() => setShowPassword((prevState) => !prevState)}
                // onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>

            <button className="sign-in-button">Sign In</button>
          </form>

          {/* Google OAuth */}

          <p>
            Don't have an account yet?{" "}
            <Link to="/artist-sign-up" className="sign-up-link">
              Sign Up
            </Link>
          </p>
        </main>
      </div>
    </>
  );
};

export default SignIn;
