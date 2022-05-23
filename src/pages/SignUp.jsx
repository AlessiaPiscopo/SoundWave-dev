import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import eyeOpenIcon from "../assets/icons/eyeOpenIcon.svg";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (ev) => {
    setFormData((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }));
  };

  // authenticate user & add to database
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // need this for our database
      const user = userCredential.user;

      // allow users to edit/update display name
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = {
        ...formData,
      };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      // we use setDoc(), which requires us to explicity set an id, since we need matching user ids in Auth & Firestore
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      // redirect to homepage
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="page-container">
        <header>
          <p className="page-header">Sign Up</p>
        </header>

        <main>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="name-input"
              placeholder="Artist Name"
              id="name"
              value={name}
              onChange={handleChange}
            />
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
                className="passwordInput"
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

            <button className="sign-in-button">Sign Up</button>
          </form>

          {/* Google OAuth */}

          <Link to="/sign-in" className="registerLink">
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignUp;
