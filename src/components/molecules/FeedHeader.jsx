import { View, Text } from "react-native";
import React from "react";
import ProfileIcon from "../atoms/ProfileIcon";
import { theme } from "../../config";

const FeedHeader = () => {
  return (
    <View
      style={{
        display: "flex",

        marginTop: 10,
        marginBottom: 30,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 5,
        }}
      >
        <Text
          style={{
            fontWeight: "500",
            fontSize: 20,
            lineHeight: 23,
            color: theme.colors.text,
          }}
        >
          Hello jasmin 👋
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 15,
            lineHeight: 15,
            color: theme.colors.subtext,
          }}
        >
          let’s find the intership you need
        </Text>
      </View>
      <ProfileIcon />
    </View>
  );
};

export default FeedHeader;
