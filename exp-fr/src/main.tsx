import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const domain = "youngmonk.us.auth0.com"; // Replace with your Auth0 domain
const clientId = "IFaARECMHsK9N8FcpXOFA7d3ZWTaH9az"; // Replace with your Auth0 client ID

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: "http://localhost:5173/callback", // Frontend callback URL
    }}
  >
    <App />
  </Auth0Provider>
);
