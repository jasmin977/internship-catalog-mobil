import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../../config";

const Review = () => {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Text>Reviews</Text>
      <Text>4.0</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
        {[0, 1, 2, 3, 4].map((index) => {
          return (
            <AntDesign
              key={index}
              color={theme.colors.primary}
              size={25}
              name="staro"
            />
          );
        })}
      </View>
      <Text>based on 23 reviews</Text>
    </View>
  );
};

export default Review;
