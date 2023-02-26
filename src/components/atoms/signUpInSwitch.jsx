import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../config";

const SignUpInSwitch = ({ quest, sol, screen, navigation }) => {
  return (
    <View style={styles.row}>
      <Text style={{ fontFamily: "MyFont-SemiBold" }}>{quest}? </Text>
      <TouchableOpacity onPress={() => navigation.replace(screen)}>
        <Text style={styles.link}>{sol}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",

    marginTop: 10,
  },
  link: {
    fontFamily: "MyFont-SemiBold",
    color: theme.colors.primary,
  },
});
export default SignUpInSwitch;
