import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx"; // Import the provider component, not the context itself
import { ToastContainer } from "react-toastify";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log(PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AppContextProvider>
        <ToastContainer />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </ClerkProvider>
  </StrictMode>
);
