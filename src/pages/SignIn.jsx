import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import eyeOpenIcon from "../assets/icons/eyeOpenIcon.svg";

// TODO: add Error message: Error! Invalid email or password. Please try again.

const SignIn = () => {
  const navigate = useNavigate();

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

  // signInWithEmailAndPassword returns a promise, so we use an async function
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      // initialize auth
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // if user added successfully, redirect to profile
      if (userCredential.user) {
        navigate("/artist-profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="page-container">
        <Link to="/">SoundWave</Link>
        <header>
          <h1 className="page-header">Welcome Back</h1>
        </header>

        <main>
          <form onSubmit={handleSubmit}>
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

              {/* <img
                src={eyeOpenIcon}
                alt="show password"
                className="show-password"
                onClick={() => setShowPassword((prevState) => !prevState)}
                // onClick={() => setShowPassword(!showPassword)}
              /> */}
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
