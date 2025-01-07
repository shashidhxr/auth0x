import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";

export const Landing = () => {
  const { isAuthenticated, user, loginWithRedirect, getIdTokenClaims } = useAuth0();

//   useEffect(() => {
//     const registerUser = async () => {
//       if (!isAuthenticated || !user) {
//         console.log("User not authenticated or user object not available yet.");
//         return;
//       }

//       console.log("Preparing to send API request...");
//       try {
//         // Get the ID token from Auth0
//         const token = await getIdTokenClaims();
//         console.log("ID Token Retrieved:", token);

//         const userData = {
//           name: user.name,
//           email: user.email,
//         };

//         // Send the API request
//         const response = await axios.post(
//           "http://127.0.0.1:3500/api/v1/signup",
//           userData,
//           {
//             headers: {
//               Authorization: `Bearer ${token?.__raw}`, // Send token for authentication
//             },
//           }
//         );

//         console.log("API response:", response.data);
//       } catch (error) {
//         console.error("Error sending API request:", error);
//       }
//     };

//     if (isAuthenticated && user) {
//       registerUser();
//     }
//   }, [isAuthenticated, user, getIdTokenClaims]);

  // Handle login button click
  const handleSignup = async () => {
    console.log("Redirecting to login...");
    await loginWithRedirect(); 
  };

  return <button onClick={handleSignup}>Signup</button>;
};
