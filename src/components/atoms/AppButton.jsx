import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../config/theme";

const AppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    width: "100%",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
    alignSelf: "center",
    fontSize: 20,
    textTransform: "capitalize",
  },
});
export default AppButton;
