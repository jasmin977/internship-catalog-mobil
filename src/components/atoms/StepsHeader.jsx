import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../config";
import Header from "./Header";

const StepsHeader = ({ headerText, subtext, email }) => {
  return (
    <View
      style={{
        marginVertical: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header title={headerText} />

      <Text style={styles.subtitle}>
        {subtext} {email}.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 160,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    display: "flex",
    color: theme.colors.subtext,
    textAlign: "center",
    width: 300,
    fontFamily: "text",
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
  },

  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
export default StepsHeader;
