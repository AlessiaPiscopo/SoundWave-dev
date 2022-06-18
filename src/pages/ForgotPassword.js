import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (ev) => setEmail(ev.target.value);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email sent. Please check your inbox.");
    } catch (error) {
      toast.error("Could not send reset email. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <header>
        <p className="page-header">Forgot Password?</p>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="emailInput"
            id="email"
            value={email}
            onChange={handleChange}
          />

          <button>Send Reset Link</button>
          <Link className="forgot-password-link" to="/artist-sign-in">
            Sign In
          </Link>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
