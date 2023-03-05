import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../../config";

const Overview = ({ overview }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text
        style={{
          fontSize: 20,
          color: theme.colors.text,
          fontFamily: "MyFont-SemiBold",
        }}
      >
        Overview
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "MyFont-Regular",
          color: theme.colors.subtext,
        }}
      >
        {overview}
      </Text>
    </View>
  );
};

export default Overview;
