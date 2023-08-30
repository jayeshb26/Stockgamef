import React, { createContext, useContext, useEffect, useState } from "react";
import store from "../../Redux/store";

// Create the context
const AuthContext = createContext();

// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a context provider component
export const AuthProvider = ({ children }) => {
  const [authContextValue, setAuthContextValue] = useState({
    loggedIn: false,
    token: null,
  });
  const updateAuthContextValue = (loggedIn, token) => {
    setAuthContextValue({
      loggedIn,
      token,
    });
  };
  useEffect(() => {
    // Subscribe to the Redux store to update context state on LOGIN_SUCCESS_CONTEXT_UPDATE
    const unsubscribe = store.subscribe(() => {
      const { loggedIn, token } = store.getState().auth;
      updateAuthContextValue(loggedIn, token);
    });
    // Unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ authContextValue, updateAuthContextValue }}>
      {children}
    </AuthContext.Provider>
  );
};
