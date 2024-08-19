import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import Bootstrap CSS
import "./assets/common/lib/bootstrap/css/bootstrap.min.css";

// Import Font Awesome CSS
import "./assets/common/lib/fontawesome/css/fontawesome.css";
import "./assets/common/lib/fontawesome/css/brands.css";
import "./assets/common/lib/fontawesome/css/solid.css";

// Import user.css
import "./assets/user/css/user.css";

// Import common JS
import "./assets/common/lib/axios.min.js";
import "./assets/common/lib/bootstrap/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
