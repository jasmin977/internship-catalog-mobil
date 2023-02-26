import { View, StyleSheet } from "react-native";
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
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.bg,
  },
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Background;
