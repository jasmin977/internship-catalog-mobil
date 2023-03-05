import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  isLoading: {},
  userToken: {},
  userInfo: () => {},
  saveUserCredential: () => {},
  removeUserCredential: () => {},
});

export default AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setisloading] = useState(false);

  // check if the user is already authenticated when the app starts
  useEffect(() => {
    isLoggedIn();
  }, []);

  const isLoggedIn = async () => {
    try {
      setisloading(true);
      let isAuthenticated = await AsyncStorage.getItem("userToken");

      if (isAuthenticated) {
        let userInfo = await AsyncStorage.getItem("user");
        let userToken = await AsyncStorage.getItem("userToken");
        setUserToken(JSON.parse(userToken));
        setUserInfo(JSON.parse(userInfo));
        setIsAuthenticated(true);
      }
      setisloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const saveUserCredential = async (token, user) => {
    try {
      setisloading(true);
      console.log(token, user);
      setUserInfo(user);
      setUserToken(token);
      setIsAuthenticated(true);
      AsyncStorage.setItem("user", JSON.stringify(user));
      AsyncStorage.setItem("userToken", JSON.stringify(token));
      setisloading(false);
    } catch (error) {
      console.log("Error writing to local storage");
      console.log(error);
    }
  };

  const removeUserCredential = async () => {
    try {
      setisloading(true);
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("userToken");
      setUserInfo(null);
      setUserToken(null);
      setIsAuthenticated(false);
      setisloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        userInfo,
        userToken,
        removeUserCredential,
        saveUserCredential,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
