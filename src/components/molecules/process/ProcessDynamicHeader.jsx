import React from "react";

import { Text, View, StyleSheet, Animated } from "react-native";
import { GoBackBtn } from "../../atoms";
import { theme } from "../../../config";
import { Ionicons } from "@expo/vector-icons";

const Header_Max_Height = 150;
const Header_Min_Height = 100;

const stepHeaders = [
  { id: 1, name: "about me", icon: "document-text-outline" },
  { id: 2, name: "company", icon: "podium-outline" },
  { id: 3, name: "supervisors", icon: "people-outline" },
  ,
];
export default function DynamicHeader({ animHeaderValue, step, action }) {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [theme.colors.primary, theme.colors.primary],
    extrapolate: "clamp",
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          flexDirection: "row",
          gap: 20,
          justifyContent: "space-between",
        }}
      >
        {stepHeaders.map((stepItem, idx) => (
          <View
            key={`process_${stepItem.name}_${idx}`}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor:
                  idx + 1 === step
                    ? theme.colors.bg
                    : "rgba(255, 255, 255, 0.5)",
                borderRadius: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                height: 50,
              }}
            >
              <Ionicons
                name={stepItem.icon}
                size={30}
                color={theme.colors.primary}
              />
            </View>
            <Text
              style={{
                color:
                  idx + 1 === step
                    ? theme.colors.bg
                    : "rgba(255, 255, 255, 0.5)",

                fontSize: 15,
                lineHeight: 41,
                fontFamily: "hint",
                textTransform: "capitalize",
              }}
            >
              {stepItem.name}
            </Text>
          </View>
        ))}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
