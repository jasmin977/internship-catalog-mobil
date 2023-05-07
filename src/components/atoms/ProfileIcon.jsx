import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProfileStackScreens")}
    >
      <Image
        source={{
          uri: "http://192.168.1.13:8080/static/avatars/avatar_12.jpg",
        }}
        style={{ width: 60, height: 60, borderRadius: 50 / 2 }}
      />
    </TouchableOpacity>
  );
};

export default ProfileIcon;
