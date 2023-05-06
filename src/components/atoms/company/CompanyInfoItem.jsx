import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../config";

const CompanyInfoItem = ({ iconName, text, taille, color }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Ionicons
        color={color ? color : theme.colors.text}
        size={taille ? taille : 22}
        name={iconName}
      />
      <Text
        style={{
          textAlign: "auto",
          fontFamily: "hint",
          fontSize: taille ? taille : 17,
          color: color ? color : theme.colors.text,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default CompanyInfoItem;
