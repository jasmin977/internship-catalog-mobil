import { View, Text } from "react-native";
import React, { useContext } from "react";
import { theme } from "../../config";
import { AuthContext } from "../../context";
import { ProfileIcon } from "../atoms";

const FeedHeader = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <View
      style={{
        // display: "flex",
        paddingHorizontal: 20,
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
            fontSize: 25,
            fontFamily: "title",
            color: theme.colors.text,
            textTransform: "capitalize",
          }}
        >
          Hello {userInfo.first_name} 👋
        </Text>
        <Text
          style={{
            fontFamily: "subTitle",
            textTransform: "capitalize",
            fontSize: 13,
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
