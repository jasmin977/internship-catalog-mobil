import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  isLoading: {},
  userToken: {},
  completedProfile: {},
  userInfo: () => {},
  saveUserCredential: () => {},
  removeUserCredential: () => {},
});

export default AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setisloading] = useState(false);
  const [completedProfile, setCompletedProfile] = useState(false);

  // const userData = {
  //   id: 19,
  //   first_name: "Mohammed ali",
  //   last_name: "Meddeb",
  //   email: "userl@issatso.u-sousse.tn",
  //   registration_completed: true,
  // };
  useEffect(() => {
    // removeUserCredential();
    // saveUserCredential("token", userData);
    isLoggedIn();
  }, []);

  const isLoggedIn = async () => {
    try {
      setisloading(true);

      let isAuthenticated = await AsyncStorage.getItem("userToken");
      console.log("isAuthenticated", isAuthenticated);
      if (isAuthenticated) {
        let userInfo = JSON.parse(await AsyncStorage.getItem("user"));
        let userToken = JSON.parse(await AsyncStorage.getItem("userToken"));
        console.log(userInfo, userToken);
        setUserToken(userToken);
        setUserInfo(userInfo);

        setCompletedProfile(userInfo.registration_completed);
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
      setCompletedProfile(user.registration_completed);
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
        completedProfile,
        userToken,
        removeUserCredential,
        saveUserCredential,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
