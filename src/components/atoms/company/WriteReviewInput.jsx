import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { theme } from "../../../config";

const WriteReviewInput = () => {
  const [reviewText, setReviewText] = useState("");
  return (
    <View>
      <TextInput
        style={{
          height: 150,
          borderColor: theme.colors.subtext,
          borderWidth: 1.8,
          borderRadius: 8,
          padding: 10,
          fontSize: 18,
        }}
        multiline
        numberOfLines={4}
        onChangeText={(text) => setReviewText(text)}
        value={reviewText}
        placeholder="what do you think about this company"
      />
    </View>
  );
};

export default WriteReviewInput;
