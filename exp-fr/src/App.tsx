import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function App() {
  const { user, isAuthenticated, getIdTokenClaims, loginWithRedirect, logout, handleRedirectCallback } = useAuth0();

  // Handle the redirect callback after Auth0 login
  useEffect(() => {
    if (window.location.pathname === "/callback") {
      handleRedirectCallback();
    }
  }, [handleRedirectCallback]);

  // Register the user in the backend after authentication
  useEffect(() => {
    const registerNewUser = async () => {
        console.log("use effect")
      if (isAuthenticated && user) {
        const token = await getIdTokenClaims();
        console.log(token)
        await axios.post("http://localhost:3000/api/register", {
          email: user.email,
          name: user.name,
        }, {
          headers: { Authorization: `Bearer ${token.__raw}` },
        });
      }
    };

    registerNewUser();
  }, [isAuthenticated, user, getIdTokenClaims]);

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <button onClick={() => loginWithRedirect()}>Signup/Login</button>
        </div>
      ) : (
        <div>
          <h3>Welcome, {user?.name}</h3>
          <p>Email: {user?.email}</p>
          <img
            src={user?.picture}
            alt="User Avatar"
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <div>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
