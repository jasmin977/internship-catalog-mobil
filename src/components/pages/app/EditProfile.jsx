import { View, Text, ImageBackground } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { Background, GoBackBtn } from "../../atoms";
import { theme } from "../../../config";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext, ProcessFormContext } from "../../../context";
import { Image } from "react-native";

import { PersonalDetailStep } from "../../templates/process";
import { TouchableOpacity } from "react-native";

const StickyHeader = ({ name, action, save }) => {
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
        paddingVertical: 15,
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

      <TouchableOpacity onPress={save}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "importantText",
            color: theme.colors.primary,
          }}
        >
          save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const EditProfile = () => {
  const [savedEdit, setSavedEdit] = useState(false);
  const handleEditProfile = () => {
    setSavedEdit(true);
  };

  return (
    <View style={{ backgroundColor: theme.colors.bg }}>
      <ScrollView stickyHeaderIndices={[0]}>
        <StickyHeader save={handleEditProfile} name={"Edit Profile"} />
        <PersonalDetailStep savedEdit={savedEdit} title={"Save"} />
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
