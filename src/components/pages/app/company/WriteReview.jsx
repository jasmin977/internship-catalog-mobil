import { View, Text } from "react-native";
import React from "react";

import { theme } from "../../../../config";
import {
  RateOption,
  UserReviewHeader,
  WriteReviewInput,
} from "../../../atoms/company";
import { AppButton } from "../../../atoms";
import { useContext } from "react";
import { AuthContext } from "../../../../context";
import { StyleSheet } from "react-native";

const WriteReview = ({
  handleSubmit,
  rating,
  setRating,
  review,
  setReview,
}) => {
  const { userInfo } = useContext(AuthContext);
  const reviewInfo = {
    postedByPhot:
      "https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png",
    postedByName: userInfo.first_name,
    rate: rating,
  };

  return (
    <View style={{ paddingHorizontal: 5 }}>
      <Text style={headerStyle}>Rate this company</Text>
      <Text style={hintStyle}>Tell others what you think</Text>
      <RateOption rating={rating} setRating={setRating} />
      <View style={{ gap: 5, alignItems: "flex-start" }}>
        <UserReviewHeader review={reviewInfo} />
        <WriteReviewInput value={review} setValue={setReview} />
      </View>
      <AppButton
        onPress={handleSubmit}
        additionalstyle={{ width: "100%" }}
        title={"publish review"}
        iconName={"chatbox-outline"}
      ></AppButton>
    </View>
  );
};

const headerStyle = StyleSheet.create({
  fontFamily: "title",
  fontSize: 22,
  color: theme.colors.text,
});
const hintStyle = StyleSheet.create({
  fontFamily: "text",
  fontSize: 13,
  color: theme.colors.text,
});

export default WriteReview;
