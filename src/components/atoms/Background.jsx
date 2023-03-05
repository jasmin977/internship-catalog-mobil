import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import React from "react";
import { theme } from "../../config";

const Background = ({ children }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",

    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: theme.colors.bg,
  },
  container: {
    width: "100%",
    paddingTop: StatusBar.currentHeight,
    // alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Background;
