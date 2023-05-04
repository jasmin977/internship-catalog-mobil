import React, { useState } from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../config";
import { Feather } from "@expo/vector-icons";
const MyInputText = ({
  name,
  label,
  onChangeText,
  hint,
  value,
  type,
  onBlur,
  secureTextEntry,
  errorText,
  keyboardType,
}) => {
  const [secureText, setSecureText] = useState(true);

  const handleInputChange = (value) => {
    onChangeText(value);
  };

  const toggleSecureTextEntry = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          textTransform: "capitalize",
          fontWeight: "500",
          fontSize: 13,
          color: theme.colors.subtext,
          fontFamily: "importantText",
        }}
      >
        {label}
      </Text>
      <View style={styles.iconInput}>
        <TextInput
          name={name}
          selectionColor={theme.colors.primary}
          placeholder={hint}
          style={type ? styles.inputwithIcon : styles.inputwithoutIcon}
          value={value}
          onBlur={onBlur}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry ? secureText : false}
          keyboardType={keyboardType}
        />
        {type ? (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <Feather
              name={secureTextEntry ? "eye-off" : "eye"}
              size={24}
              color={theme.colors.subtext}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  iconInput: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.input,
    flexDirection: "row",
    paddingHorizontal: 10,
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputwithIcon: {
    width: 280,
    fontSize: 16,
    fontFamily: "text",
  },
  inputwithoutIcon: {
    width: 300,
    fontSize: 16,
    fontFamily: "text",
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});
export default MyInputText;
