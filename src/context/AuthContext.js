import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isAuthenticated: {},
  isLoading: {},
  userToken: {},
  userInfo: () => {},
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

      let isAuthenticated = await AsyncStorage.getItem("isAuthenticated");

      if (isAuthenticated) {
        setIsAuthenticated(true);
        let userInfo = await AsyncStorage.getItem("userInfo");
        let userToken = await AsyncStorage.getItem("userToken");
        setUserToken(userToken);
        setUserInfo(userInfo);
      }
      setisloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data) => {
    try {
      const [{ data, status }, err] = await registrationApi.login(
        email.value,
        password.value
      );
      if (err) console.log(err);
      if (data.success) {
        setUserInfo();
        setUserToken();
        setIsAuthenticated(true);
        AsyncStorage.setItem("userInfo");
        AsyncStorage.setItem("userToken");
        AsyncStorage.setItem("isAuthenticated", true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userInfo");
      await AsyncStorage.removeItem("userToken");
      await AsyncStorage.removeItem("isAuthenticated");
      setUserInfo(null);
      setUserToken(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        userToken,
        userInfo,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
