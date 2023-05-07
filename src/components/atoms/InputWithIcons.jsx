import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../config";

const InputWithIcons = ({ iconNameLeft, action }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        width: screenWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 20,
      }}
    >
      <TouchableOpacity style={styles.container} onPress={action}>
        <Ionicons
          name={iconNameLeft}
          size={24}
          color={theme.colors.subtext}
          style={{ paddingEnd: 10 }}
        />
        <View>
          <Text style={styles.input}>search your internship ...</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.primary,
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Ionicons name="filter-outline" size={24} color={theme.colors.bg} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.colors.input,
    borderRadius: 8,
    padding: 12,
  },
  input: {
    fontSize: 14,
    fontFamily: "hint",
    marginHorizontal: 5,
    color: theme.colors.subtext,
  },
  icon: {},
});

export default InputWithIcons;
