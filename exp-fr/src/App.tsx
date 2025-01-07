// import { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// function App() {
//     const { user, isAuthenticated, getIdTokenClaims, loginWithRedirect, logout } = useAuth0();
//     // const navigate = useNavigate()

//     // Register the user in the backend after authentication
//     useEffect(() => {
//         const registerNewUser = async () => {
//             console.log("use effect")
//             if (isAuthenticated && user) {
//                 const token = await getIdTokenClaims();
//                 console.log(token)
//                 await axios.post("http://localhost:3000/api/register", {
//                     email: user.email,
//                     name: user.name,
//                 }, {
//                     headers: { Authorization: `Bearer ${token?.__raw}` },
//                 });
//             }
//         };  

//         registerNewUser();
//     }, [isAuthenticated, user, getIdTokenClaims]);

//     return (
//         <div>
//             {!isAuthenticated ? (
//                 <>
//                     <div>
//                         <button onClick={() => loginWithRedirect()}>Signup</button>
//                     </div>
//                     <div>
//                         <button onClick={() => loginWithRedirect()}>login</button>
//                     </div>
//                 </>
//             ) : (
//                 <div>
//                     <h3>Welcome, {user?.name}</h3>
//                     <p>Email: {user?.email}</p>
//                     <img
//                         src={user?.picture}
//                         alt="User Avatar"
//                         style={{ width: "100px", borderRadius: "50%" }}
//                     />
//                     <div>
//                         <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './pages/landing'
import { Home } from './pages/home'
// import { Signup } from './pages/Signup'
// import { Signin } from './pages/Signin'
function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing></Landing>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
