import { Image, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  firstnameValidator,
  lastnameValidator,
} from "../../../helpers/nameValidator";

import { registrationApi } from "../../../api";

import {
  AppButton,
  Background,
  GoBackBtn,
  Header,
  MyInputText,
  Picker,
} from "../../atoms";
import { AuthContext } from "../../../context";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { useRef } from "react";
import { theme } from "../../../config";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const AVATARS = [
  { id: 1, image: require("../../../../assets/avatars/avatar_1.jpg") },
  { id: 2, image: require("../../../../assets/avatars/avatar_2.jpg") },
  { id: 3, image: require("../../../../assets/avatars/avatar_3.jpg") },
  { id: 4, image: require("../../../../assets/avatars/avatar_4.jpg") },
  { id: 5, image: require("../../../../assets/avatars/avatar_5.jpg") },
  { id: 6, image: require("../../../../assets/avatars/avatar_6.jpg") },
  { id: 7, image: require("../../../../assets/avatars/avatar_7.jpg") },
  { id: 8, image: require("../../../../assets/avatars/avatar_8.jpg") },
  { id: 9, image: require("../../../../assets/avatars/avatar_9.jpg") },
  { id: 10, image: require("../../../../assets/avatars/avatar_10.jpg") },
  { id: 11, image: require("../../../../assets/avatars/avatar_11.jpg") },
  { id: 12, image: require("../../../../assets/avatars/avatar_12.jpg") },
  { id: 13, image: require("../../../../assets/avatars/avatar_13.jpg") },
  { id: 14, image: require("../../../../assets/avatars/avatar_14.jpg") },
  { id: 15, image: require("../../../../assets/avatars/avatar_15.jpg") },
  { id: 16, image: require("../../../../assets/avatars/avatar_16.jpg") },
  { id: 17, image: require("../../../../assets/avatars/avatar_17.jpg") },
  { id: 18, image: require("../../../../assets/avatars/avatar_18.jpg") },
  { id: 19, image: require("../../../../assets/avatars/avatar_19.jpg") },
  { id: 20, image: require("../../../../assets/avatars/avatar_20.jpg") },
  { id: 21, image: require("../../../../assets/avatars/avatar_21.jpg") },
  { id: 22, image: require("../../../../assets/avatars/avatar_22.jpg") },
  { id: 23, image: require("../../../../assets/avatars/avatar_23.jpg") },
  { id: 24, image: require("../../../../assets/avatars/avatar_24.jpg") },
];

const CompleteProfile = ({ route }) => {
  const { saveUserCredential, userInfo, userToken } = useContext(AuthContext);
  const [firstname, setFirstname] = useState({ value: "", error: "" });
  const [lastname, setLastname] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [choosenIndex, setChoosenIndex] = useState(0);
  const [Specialities, setSpecialties] = useState([]);
  const [imageIndex, setimageIndex] = useState(4);
  const ref = useRef(null);

  const onCreatePressed = async () => {
    const firstnameError = firstnameValidator(firstname.value);
    const lastnameError = lastnameValidator(lastname.value);
    if (lastnameError || firstnameError) {
      setFirstname({ ...firstname, error: firstnameError });
      setLastname({ ...lastname, error: lastnameError });
      return;
    }
    setLoading(true);
    const [{ data }, err] = await registrationApi.userPersonalInfo(
      userInfo.email,
      firstname.value,
      lastname.value,
      Specialities[choosenIndex].id,
      userToken
    );
    setLoading(false);
    if (err) console.log(err);
    if (data.success) {
      saveUserCredential(userToken, data.user);
    }
  };

  const fetchMajors = async () => {
    const [res, err] = await registrationApi.getMajorLast();
    if (err) return console.log(err);
    const { data, status } = res;
    if (status === 200) {
      setSpecialties(data.majors);
      return;
    }
    // TODO: handle errors or empty response
    console.log("handle failed response");
  };

  useEffect(() => {
    fetchMajors();
  }, []);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: imageIndex,
      animated: true,
      viewPosition: 0.5,
      // viewOffset: (Dimensions.get("screen").width - 70) / 2,
    });
  }, [imageIndex]);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => setimageIndex(index)}>
      <Image
        source={item.image}
        style={[styles.avatar, index === imageIndex && styles.selectedAvatar]}
      />
    </TouchableOpacity>
  );

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const centerIndex = Math.floor(viewableItems.length / 2);
      setSelectedId(viewableItems[centerIndex].item.id);
    }
  };
  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);
  return (
    <Background>
      {/* <Image
        source={require("../../../../assets/login.png")}
        style={{ width: 250, height: 250 }}
      /> */}
      <Header title="Select your avatar" />
      <Text
        style={{
          color: theme.colors.subtext,
          paddingBottom: 20,
          fontSize: 15,
          textAlign: "center",
          width: 250,
          fontFamily: "MyFont-SemiBold",
        }}
      >
        Pick an avatar to identify yourself on this platform
      </Text>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Ionicons
          name="caret-down-outline"
          size={20}
          color={theme.colors.primary}
        />
      </View>
      <FlatList
        ref={ref}
        data={AVATARS}
        initialScrollIndex={imageIndex}
        horizontal
        contentContainerStyle={{
          justifyContent: "center",
          paddingHorizontal: Dimensions.get("screen").width / 2 - 25,
          // paddingRight: 300,
          alignItems: "center",
          gap: 25,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onScrollToIndexFailed={(info) => {
          console.log("info", info);
        }}
        // viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <View style={{ width: "100%", alignItems: "center" }}>
        <Ionicons
          name="caret-up-outline"
          size={20}
          color={theme.colors.primary}
        />
      </View>

      <View style={{ gap: 20 }}>
        <MyInputText
          label={"firstname"}
          returnKeyType="next"
          value={firstname.value}
          onChangeText={(text) => setFirstname({ value: text, error: "" })}
          errorText={firstname.error}
          hint="firstname"
          autoCapitalize="none"
        />

        <MyInputText
          label={"lastname"}
          returnKeyType="done"
          value={lastname.value}
          onChangeText={(text) => setLastname({ value: text, error: "" })}
          errorText={lastname.error}
          hint="lastname"
          autoCapitalize="none"
        />
        <Picker
          label={"major"}
          values={Specialities}
          selectedIdx={choosenIndex}
          action={(itemValue, itemIndex) => {
            setChoosenIndex(itemIndex);
          }}
        />
      </View>
      <View style={{ height: 50 }}></View>
      <AppButton
        loading={loading}
        title="Create"
        onPress={() => onCreatePressed()}
      />
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },

  selectedAvatar: {
    borderWidth: 4,
    borderColor: theme.colors.primary,
    // width: 70,
    // height: 70,
    borderRadius: 20,
  },
});
export default CompleteProfile;
