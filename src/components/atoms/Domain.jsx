import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../config";

const Domain = ({ domain }) => {
  return (
    <TouchableOpacity
      style={{
        borderColor: theme.colors.primary,
        borderWidth: 1.5,
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "MyFont-SemiBold",
          fontSize: 15,
          color: theme.colors.primary,

          textTransform: "capitalize",
        }}
      >
        {domain.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Domain;
