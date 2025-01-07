import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const domain = import.meta.env.AUTH0_DOMAIN
const clientId = import.meta.env.CLIENT_ID

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: "http://localhost:5173/home", 
    }}
  >
    <App />
  </Auth0Provider>
);
