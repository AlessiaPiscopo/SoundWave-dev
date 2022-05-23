import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const ArtistProfile = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : <h1>user not logged in</h1>;
};

export default ArtistProfile;
