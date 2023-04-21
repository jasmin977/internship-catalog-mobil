import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../config";
import { useNavigation } from "@react-navigation/native";

const GoBackBtn = ({ color, action }) => {
  if (!color) {
    color = theme.colors.text;
  }
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={
        action
          ? action
          : () => {
              navigation.goBack();
            }
      }
    >
      <Ionicons color={color} size={25} name="arrow-back-outline" />
    </TouchableOpacity>
  );
};

export default GoBackBtn;
