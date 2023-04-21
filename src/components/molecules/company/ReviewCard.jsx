import { View, Text, Dimensions } from "react-native";
import React from "react";

import { theme } from "../../../config";
import { UserReviewHeader } from "../../atoms/company";

const ReviewCard = ({ review }) => {
  return (
    <View
      style={{
        padding: 5,

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
        <UserReviewHeader review={review} />
        <Text
          style={{
            fontFamily: "text",
            fontSize: 13,
            color: theme.colors.subtext,
          }}
        >
          {new Date().toLocaleDateString()}
        </Text>
      </View>
      <Text
        style={{ fontFamily: "text", fontSize: 13, color: theme.colors.text }}
      >
        {review.reviewDescription}.
      </Text>
    </View>
  );
};

export default ReviewCard;
