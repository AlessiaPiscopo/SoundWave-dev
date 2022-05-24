import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pages & components
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import ArtistProfile from "./pages/ArtistProfile";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/artist-sign-in" element={<SignIn />} />
          <Route path="/artist-sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* let only logged-in users access profile page */}
          <Route path="/artist-profile" element={<PrivateRoute />}>
            <Route path="/artist-profile" element={<ArtistProfile />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
