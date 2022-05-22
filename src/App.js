import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import ArtistSignUp from "./pages/ArtistSignUp";
import ArtistSignIn from "./pages/ArtistSignIn";
import ForgotPassword from "./pages/ForgotPassword";
// import ArtistProfile from "./pages/ArtistProfile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* TODO: conditional redirect */}
          <Route path="/artist-profile" element={<ArtistSignIn />} />
          <Route path="/artist-sign-in" element={<ArtistSignIn />} />
          <Route path="/artist-sign-up" element={<ArtistSignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
