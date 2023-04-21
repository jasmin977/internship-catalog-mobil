import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useState } from "react";

import { AuthContext } from "../../../context";
import { MatchedComapniesList } from "../../templates";
import { FeedHeader } from "../../molecules";
import { Background, InputWithIcons } from "../../atoms";
import { ProcessReminder } from "../../molecules/process";
import Search from "./Search";

const Dashboard = ({ navigation }) => {
  const { removeUserCredential } = useContext(AuthContext);
  const [currentView, setCurrentView] = useState("feed");
  const handleViewChange = (view) => {
    setCurrentView(view);
  };
  return (
    <Background>
      {currentView === "feed" && (
        <>
          <FeedHeader />
          <InputWithIcons
            action={() => handleViewChange("search")}
            iconNameLeft="search"
          />

          <ProcessReminder />
          <MatchedComapniesList />
          {/**       <AppButton title="logout" onPress={() => removeUserCredential()} />
           */}
        </>
      )}

      {currentView === "search" && (
        <Search
          header={"companies list"}
          action={() => handleViewChange("feed")}
        />
      )}
    </Background>
  );
};

export default Dashboard;
