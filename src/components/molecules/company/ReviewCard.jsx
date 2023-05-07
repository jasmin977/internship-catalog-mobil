import { View, Text, Dimensions } from "react-native";
import React from "react";
import { theme } from "../../../config";
import { UserReviewHeader } from "../../atoms/company";

const ReviewCard = ({ review, idx }) => {
  return (
    <View
      style={{
        padding: 5,
        paddingHorizontal: 10,
        gap: 2,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: Dimensions.get("window").width - 20,
          padding: 5,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <UserReviewHeader idx={idx} review={review} />
        <Text
          style={{
            fontFamily: "text",
            fontSize: 13,
            color: theme.colors.subtext,
          }}
        >
          {new Date(review.createdAt).toLocaleDateString()}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "text",
          fontSize: 13,
          color: theme.colors.text,
        }}
      >
        {review.content}.
      </Text>
    </View>
  );
};

export default ReviewCard;
