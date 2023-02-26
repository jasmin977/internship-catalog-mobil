import { StyleSheet, Text } from "react-native";
import React from "react";
import { theme } from "../../config";

const Header = ({ title }) => {
  return <Text style={styles.header}>{title}</Text>;
};
const styles = StyleSheet.create({
  header: {
    color: theme.colors.text,
    paddingVertical: 20,
    fontSize: 35,
    lineHeight: 41,
    fontFamily: "MyFont-SemiBold",
  },
});
export default Header;
