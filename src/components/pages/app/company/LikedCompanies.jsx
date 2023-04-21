import { View, Text } from "react-native";
import React from "react";
import { Background } from "../../../atoms";
import { SearchScreen } from "..";

export default function LikedCompanies() {
  return (
    <Background>
      <SearchScreen header={"liked companies"} />
    </Background>
  );
}
