import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../config";
import { useNavigation } from "@react-navigation/native";

const RateOption = ({ rating, setRating }) => {
  const navigation = useNavigation();

  const handlePress = (value) => {
    setRating(value);
    /*  navigation.navigate("reviewScreen", {
      rating,
    }); */
  };

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 16,
        gap: 10,
      }}
    >
      <TouchableOpacity onPress={() => handlePress(1)}>
        <Ionicons
          name={rating >= 1 ? "star" : "star-outline"}
          size={35}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(2)}>
        <Ionicons
          name={rating >= 2 ? "star" : "star-outline"}
          size={35}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(3)}>
        <Ionicons
          name={rating >= 3 ? "star" : "star-outline"}
          size={35}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(4)}>
        <Ionicons
          name={rating >= 4 ? "star" : "star-outline"}
          size={35}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(5)}>
        <Ionicons
          name={rating >= 5 ? "star" : "star-outline"}
          size={35}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RateOption;
