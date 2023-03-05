import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../config";

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
    // marginHorizontal: 20,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
    fontFamily: "MyFont-SemiBold",
    alignSelf: "center",
    fontSize: 20,
    textTransform: "capitalize",
  },
});
export default AppButton;
