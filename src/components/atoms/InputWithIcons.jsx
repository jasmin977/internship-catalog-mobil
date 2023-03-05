import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../config";

const InputWithIcons = ({ iconNameLeft, iconNameRight, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("SearchScreen")}
    >
      <Ionicons
        name={iconNameLeft}
        size={24}
        color={theme.colors.subtext}
        style={styles.icon}
      />
      <View>
        <Text style={styles.input}>
          search for internship or company name...
        </Text>
      </View>
      <Ionicons
        name={iconNameRight}
        size={24}
        color={theme.colors.primary}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.input,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  input: {
    fontSize: 12,
    marginHorizontal: 5,
    color: theme.colors.subtext,
  },
  icon: {
    // marginRight: 10,
  },
});

export default InputWithIcons;
