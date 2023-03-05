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
const MyInputText = (props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleInputChange = (value) => {
    props.onChangeText(value);
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconInput}>
        <TextInput
          selectionColor={theme.colors.primary}
          placeholder={props.hint}
          style={props.type ? styles.inputwithIcon : styles.inputwithoutIcon}
          value={props.email}
          onChangeText={handleInputChange}
          secureTextEntry={secureTextEntry}
          keyboardType={props.keyboardType}
        />
        {props.type ? (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <Feather
              name={secureTextEntry ? "eye-off" : "eye"}
              size={24}
              color={theme.colors.subtext}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {props.errorText ? (
        <Text style={styles.error}>{props.errorText}</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
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
    fontFamily: "MyFont-Regular",
  },
  inputwithoutIcon: {
    width: 300,
    fontSize: 16,
    fontFamily: "MyFont-Regular",
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});
export default MyInputText;
