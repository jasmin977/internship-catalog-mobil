import { View, TouchableHighlight, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native";

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={{}}>
      <Image
        onPress={() => navigation.navigate("Profile")}
        source={{
          uri: "https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png",
        }}
        style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
      />
    </TouchableOpacity>
  );
};

export default ProfileIcon;
