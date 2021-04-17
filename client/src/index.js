import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { UserContextProvider } from "./components/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
