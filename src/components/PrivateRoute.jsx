import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoute = () => {
  // destructure useAuthStatus
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    // TODO: loading spinner
    return <div>Loading...</div>;
  }

  // if no user is logged in, redirect to sign-in page
  // outlet is the route to ArtistProfile
  return loggedIn ? <Outlet /> : <Navigate to="/artist-sign-in" />;
};

export default PrivateRoute;
