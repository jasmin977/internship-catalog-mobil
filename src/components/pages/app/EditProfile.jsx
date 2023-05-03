import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { Background } from "../../atoms";
import StickyHeader from "../../molecules/StickyHeader";
import { theme } from "../../../config";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../../context";
import { Image } from "react-native";
import { CompanyInfoItem } from "../../atoms/company";
import { Transition, Transitioning } from "react-native-reanimated";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PersonalDetailStep } from "../../templates/process";
import ImagePickerBtn from "../../molecules/ImagePicker";

const EditProfile = () => {
  const { userInfo } = useContext(AuthContext);
  {
    /**animated bottom view */
  }

  const handleEditProfile = () => {
    console.log("save edit");
  };

  return (
    <Background>
      <View>
        <ScrollView stickyHeaderIndices={[0]}>
          <StickyHeader name={"Edit Profile"} />
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              marginHorizontal: 20,
              height: 200,
              backgroundColor: theme.colors.input,
              alignItems: "center",
              paddingVertical: 30,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.bg,
                width: 130,
                height: 130,

                borderRadius: 20,
                elevation: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png",
                }}
                style={{
                  width: 130,
                  height: 130,

                  borderRadius: 20,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View style={{ alignItems: "center", gap: 5, paddingVertical: 5 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "title",
                  color: theme.colors.text,
                  textTransform: "capitalize",
                }}
              >
                {userInfo.first_name} {userInfo.last_name}
              </Text>
            </View>
          </View>
          <ImagePickerBtn />
          <PersonalDetailStep action={() => handleEditProfile} title={"Save"} />
          <View style={{ height: 100 }}></View>
        </ScrollView>
      </View>
    </Background>
  );
};

export default EditProfile;
