import { View, Text } from "react-native";
import React, { useContext } from "react";
import ProfileIcon from "../atoms/ProfileIcon";
import { theme } from "../../config";
import { AuthContext } from "../../context";

const FeedHeader = () => {
  const { userInfo } = useContext(AuthContext);
  console.log("====================================");
  console.log(userInfo);
  console.log("====================================");
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
            fontWeight: "500",
            fontSize: 20,
            lineHeight: 23,
            fontFamily: "MyFont-SemiBold",

            color: theme.colors.text,
          }}
        >
          Hello {userInfo.first_name} 👋
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontFamily: "MyFont-Regular",

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
