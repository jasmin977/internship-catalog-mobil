import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  Animated,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import DynamicHeader from "../molecules/process/ProcessDynamicHeader";
import { theme } from "../../config";
import { GoBackBtn } from "../atoms";

export default function ScrollableList({ list, action, step }) {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 5,
          backgroundColor: theme.colors.primary,
          paddingHorizontal: 15,
        }}
      >
        <GoBackBtn action={action} color={theme.colors.bg} />
        <Text
          style={{
            color: theme.colors.bg,
            paddingVertical: 10,
            fontSize: 20,
            lineHeight: 41,
            fontFamily: "importantText",
            textTransform: "capitalize",
          }}
        >
          Application From
        </Text>
        <Text> </Text>
      </View>
      <DynamicHeader
        action={action}
        step={step}
        animHeaderValue={scrollOffsetY}
      />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        {list}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    // paddingTop: 10,
    margin: 0,
  },
  scrollText: {
    fontSize: 19,
    textAlign: "center",
    padding: 20,
    color: "#000",
  },
});
