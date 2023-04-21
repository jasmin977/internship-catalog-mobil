import { View, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";

import { Text } from "react-native";
import { theme } from "../../../config";
import { AppButton, Picker } from "../../atoms";

const FormInput = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        gap: 30,

        paddingVertical: 10,
      }}
    >
      <Picker label={"choice 1"} />
      <Picker label={"choice 1"} />
      <Picker label={"choice 1"} />
    </View>
  );
};
const SupervisorsDetailStep = ({ action }) => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  return (
    <View
      style={{
        flex: 1,
        width: screenWidth,
        // height: screenHeight,

        paddingHorizontal: 20,
        paddingVertical: 40,
        borderTopEndRadius: 30,
        marginTop: 30,
        borderTopStartRadius: 30,
        backgroundColor: theme.colors.bg,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "title",
          textTransform: "capitalize",
          paddingBottom: 5,
          color: theme.colors.text,
        }}
      >
        enter supervisors details 🌱
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: theme.colors.subtext,
          fontFamily: "subTitle",
          textTransform: "capitalize",
        }}
      >
        choose 3 Institute supervisors.
      </Text>

      <View style={{ gap: 5 }}>
        <FormInput />
        <AppButton onPress={action} title={"save"} />
      </View>
    </View>
  );
};

export default SupervisorsDetailStep;
