import { View, Text, ImageBackground } from "react-native";
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
          <ImageBackground
            source={require("../../../../assets/banner.png")}
            style={{
              flex: 1,
              marginBottom: 50,
              borderRadius: 10,
              marginHorizontal: 20,
              height: 100,

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
          </ImageBackground>

          <PersonalDetailStep action={() => handleEditProfile} title={"Save"} />
          <View style={{ height: 100 }}></View>
        </ScrollView>
      </View>
    </Background>
  );
};

export default EditProfile;
