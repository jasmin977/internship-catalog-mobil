import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../config";
import { Dimensions } from "react-native";

const CompanyInfoItem = ({ iconName, text, taille, color, label, type }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        maxWidth: screenWidth - 12,
      }}
    >
      <Ionicons
        color={color ? color : theme.colors.text}
        size={taille ? taille : 22}
        name={iconName}
      />
      {label && (
        <Text
          style={{
            textAlign: "auto",
            fontFamily: "hint",
            fontWeight: "bold",
            fontSize: taille ? taille : 15,
            color: color ? color : theme.colors.text,
          }}
        >
          {label}:
        </Text>
      )}
      {type === "link" ? (
        <Text
          style={{
            textAlign: "auto",
            fontFamily: "hint",
            fontSize: taille ? taille : 15,
            color: color ? color : theme.colors.text,
            textDecorationLine: "underline",
          }}
        >
          Link 🔗
        </Text>
      ) : (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            textAlign: "auto",
            fontFamily: "hint",
            fontSize: taille ? taille : 15,
            color: color ? color : theme.colors.text,
          }}
        >
          {text}
        </Text>
      )}
    </View>
  );
};

export default CompanyInfoItem;
