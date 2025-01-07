import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  const [hasSentRequest, setHasSentRequest] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user && !hasSentRequest) {
      const sendSignupRequest = async () => {
        try {
          await axios.post("http://127.0.0.1:3500/api/v1/signup", {
            name: user.name,
            email: user.email,
          });
          console.log("User data sent to server successfully");
          setHasSentRequest(true); 
        } catch (error) {
          console.error("Error sending user data to server:", error);
        }
      };

      sendSignupRequest();
    }
  }, [isAuthenticated, user, hasSentRequest]);

  if (isAuthenticated) {
    return (
      <div>
        <div>
          <p>Email: {user?.email}</p>
          <p>Name: {user?.name}</p>
          <img src={user?.picture} alt="User Profile" />
        </div>
        <div>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      </div>
    );
  } else {
    return <div>User not authenticated</div>;
  }
};
