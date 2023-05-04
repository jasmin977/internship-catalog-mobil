import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../context";
import { MatchedComapniesList, ScrollableComapniesList } from "../../templates";
import { FeedHeader } from "../../molecules";
import { AppButton, Background, InputWithIcons } from "../../atoms";
import { ProcessReminder } from "../../molecules/process";
import Search from "./Search";
import StickyHeader from "../../templates/ScrollableHeaderPage";
import Companies from "./company/Companies";
import companiess from "../../../data/output_2023-03-05_020409.json";
const Dashboard = ({ navigation }) => {
  const { removeUserCredential } = useContext(AuthContext);
  const [currentView, setCurrentView] = useState("feed");
  const handleViewChange = (view) => {
    setCurrentView(view);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
            <ScrollableComapniesList />
            {/*  <AppButton title="logout" onPress={() => removeUserCredential()} /> */}
          </>
        )}

        {currentView === "search" && (
          <Search
            header={"companies list"}
            action={() => handleViewChange("feed")}
          />
        )}
      </Background>
    </ScrollView>
  );
};
const styles = {
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 20,
  },
};
export default Dashboard;
