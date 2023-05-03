import { TouchableHighlight, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../config";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AppButton = ({ iconName, onPress, title, additionalstyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.appButtonContainer, ...additionalstyle }}
    >
      {iconName ? (
        <Ionicons color={theme.colors.bg} size={25} name={iconName} />
      ) : (
        <></>
      )}

      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 5,
    gap: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingVertical: 20,
    flexDirection: "row",
    marginVertical: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    color: "#fff",

    fontFamily: "title",
    alignSelf: "center",
    fontSize: 18,
    textTransform: "capitalize",
  },
});
export default AppButton;
