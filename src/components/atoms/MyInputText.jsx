import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import { theme } from "../../config";

const MyInputText = (props) => {
  const handleInputChange = (value) => {
    props.onChangeText(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        selectionColor={theme.colors.primary}
        placeholder={props.hint}
        style={styles.input}
        value={props.email}
        onChangeText={handleInputChange}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
      />
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: 320,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    fontFamily: "MyFont-Regular",
    backgroundColor: theme.colors.input,
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});
export default MyInputText;
