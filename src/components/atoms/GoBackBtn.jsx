import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../config";
import { useNavigation } from "@react-navigation/native";

const GoBackBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Ionicons color={theme.colors.text} size={25} name="arrow-back-outline" />
    </TouchableOpacity>
  );
};

export default GoBackBtn;
