import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { theme } from "../../../config";

const WriteReviewInput = ({ value, setValue }) => {
  return (
    <View>
      <TextInput
        style={style}
        multiline
        numberOfLines={4}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="what do you think about this company"
      />
    </View>
  );
};

const style = StyleSheet.create({
  height: 150,
  borderColor: theme.colors.subtext,
  borderWidth: 1.8,
  textAlignVertical: "top",
  borderRadius: 8,
  padding: 10,
  fontSize: 18,
});

export default WriteReviewInput;
