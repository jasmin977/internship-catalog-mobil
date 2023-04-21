import { View, Text } from "react-native";
import React from "react";
import { Background } from "../../../atoms";
import { SearchScreen } from "..";

const SavedCompanies = () => {
  return (
    <Background>
      <SearchScreen header={"saved companies"} />
    </Background>
  );
};

export default SavedCompanies;
