import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../config";

const UserReviewHeader = ({ review }) => {
  return (
    <View
      style={{
        gap: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: review.postedByPhot,
        }}
        style={{
          width: 40,
          height: 40,
          resizeMode: "contain",
          borderRadius: 20,
        }}
      />
      <View style={{ flexDirection: "column", height: 40 }}>
        <Text
          style={{
            fontFamily: "importantText",
            fontSize: 15,
            color: theme.colors.text,
          }}
        >
          {review.postedByName}
        </Text>
        <View style={{ flexDirection: "row", gap: 3 }}>
          {Array.from({ length: review.rate }).map((item, idx) => {
            return (
              <Ionicons
                key={`rate_star_num_${idx}`}
                color={theme.colors.primary}
                size={15}
                name="star"
              />
            );
          })}
          <Text
            style={{
              fontFamily: "importantText",
              fontSize: 13,
              color: theme.colors.text,
            }}
          >
            {review.rate}.0
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserReviewHeader;
