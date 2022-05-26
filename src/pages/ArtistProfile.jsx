import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const ArtistProfile = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const handleChange = (ev) => {
    setFormData((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // update displayName in Auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // updateDisplayName in Firestore
        // create a reference to the user doc
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          // name: name,
          name,
        });
      }
    } catch (error) {
      toast.error("Could not update profile details.");
    }
  };

  return (
    <div className="artist-profile">
      <Link to="/">SoundWave</Link>

      <header className="profile-header">
        <p className="page-header">My Profile</p>
        <button type="button" className="log-out-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <main>
        <div className="profile-details-header">
          <p className="profile-details-text">Personal Details</p>
          <p
            className="change-personal-details"
            onClick={() => {
              changeDetails && handleSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>
        <div className="profile-card">
          <input
            type="text"
            id="name"
            className={changeDetails ? "profile-name" : "profile-name-active"}
            disabled={!changeDetails}
            value={name}
            onChange={handleChange}
          />
          <input
            type="text"
            id="email"
            className={changeDetails ? "profile-email" : "profile-email-active"}
            disabled={!changeDetails}
            value={email}
            onChange={handleChange}
          />
        </div>
      </main>
    </div>
  );
};

export default ArtistProfile;
