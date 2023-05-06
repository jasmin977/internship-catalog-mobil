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

const WriteReview = ({ rating, setRating }) => {
  const { userInfo } = useContext(AuthContext);
  const review = {
    postedByPhot:
      "https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png",
    postedByName: userInfo.first_name,
    rate: rating,
  };

  return (
    <View style={{ paddingHorizontal: 5 }}>
      <Text
        style={{
          fontFamily: "title",
          fontSize: 22,
          color: theme.colors.text,
        }}
      >
        Rate this company
      </Text>
      <Text
        style={{
          fontFamily: "text",
          fontSize: 13,
          color: theme.colors.text,
        }}
      >
        Tell others what you think
      </Text>
      <RateOption rating={rating} setRating={setRating} />
      <View style={{ gap: 5, alignItems: "flex-start" }}>
        <UserReviewHeader review={review} />
        <WriteReviewInput />
      </View>
      <AppButton
        onPress={() => console.log("publish review")}
        additionalstyle={{ width: "100%" }}
        title={"publish review"}
        iconName={"chatbox-outline"}
      ></AppButton>
    </View>
  );
};

export default WriteReview;
