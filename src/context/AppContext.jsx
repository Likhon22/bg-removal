import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Create the context
export const AppContext = createContext();

// Create and export the provider component
export const AppContextProvider = ({ children }) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImg, setResultImg] = useState(false);
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/users/credits", {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
      }
    } catch (error) {
      console.error("Error loading credits data:", error);
      toast.error(error.message);
    }
  };
  const removeBg = async (image) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }
      setImage(image);
      setResultImg(false);
    } catch (error) {
      console.error("Error removing background:", error);
      toast.error(error.message);
    }
  };

  const value = {
    credit,
    loadCreditsData,
    setCredit,
    backendUrl,
    image,
    setImage,
    removeBg,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// No default export needed since we're explicitly exporting what we need
