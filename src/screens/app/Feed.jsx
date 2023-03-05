import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import Background from "../../components/atoms/Background";

import InputWithIcons from "../../components/atoms/InputWithIcons";
import DomainHorizantalList from "../../components/molecules/DomainHorizantalList";
import MatchedComapniesList from "../../components/molecules/MatchedComapniesList";
import AppButton from "../../components/atoms/AppButton";
import FeedHeader from "../../components/molecules/FeedHeader";
import { AuthContext } from "../../context";

const Dashboard = ({ navigation }) => {
  const { removeUserCredential } = useContext(AuthContext);
  return (
    <Background>
      <FeedHeader />
      <InputWithIcons
        navigation={navigation}
        iconNameLeft="search"
        iconNameRight="filter"
      />

      <DomainHorizantalList />
      <MatchedComapniesList />
      <AppButton title="logout" onPress={() => removeUserCredential()} />
    </Background>
  );
};

export default Dashboard;
