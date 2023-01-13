import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // <-- add this dummy function just to make your editor autocomplete
  onLogin: (_email, _password) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const localStorageHandler = (storageItem, booleanEvaluator) =>
    booleanEvaluator
      ? localStorage.setItem(storageItem, booleanEvaluator)
      : localStorage.removeItem(storageItem);

  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorageHandler("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorageHandler("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
