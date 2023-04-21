import { View, Text } from "react-native";
import React from "react";

import { theme } from "../../../../config";
import {
  RateOption,
  UserReviewHeader,
  WriteReviewInput,
} from "../../../atoms/company";
import { AppButton, Background, GoBackBtn } from "../../../atoms";
import { ScrollView } from "react-native-gesture-handler";
const StickyHeader = ({ name }) => {
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
        paddingBottom: 20,
      }}
    >
      <GoBackBtn />
      <Text
        style={{
          fontSize: 20,
          fontFamily: "importantText",
          color: theme.colors.text,
        }}
      >
        {name}
      </Text>
      <Text></Text>
    </View>
  );
};
const WriteReview = ({ rating, setRating }) => {
  const review = {
    postedByPhot:
      "https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png",
    postedByName: "yasmine",
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
        additionalstyle
        title={"publish review"}
        iconName={"chatbox-outline"}
      ></AppButton>
    </View>
  );
};

export default WriteReview;
