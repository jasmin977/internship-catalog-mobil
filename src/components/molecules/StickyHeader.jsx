import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../config";
import { GoBackBtn } from "../atoms";
import { Ionicons } from "@expo/vector-icons";

const StickyHeader = ({ name, profileRoute, action, rightaction }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",

        backgroundColor: theme.colors.bg,
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 20,
        paddingBottom: 20,
      }}
    >
      <GoBackBtn onPress={action} />
      <Text
        style={{
          fontSize: 20,
          fontFamily: "importantText",
          color: theme.colors.text,
        }}
      >
        {name}
      </Text>
      {profileRoute ? (
        <TouchableOpacity onPress={rightaction}>
          <Ionicons color={theme.colors.text} size={30} name="menu-outline" />
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default StickyHeader;
