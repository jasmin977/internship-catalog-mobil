import { View, TextInput, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
import { theme } from "../../config";

const CodeInput = ({ code, setCode }) => {
  const inputRefs = useRef([]);
  const handleCodeChange = (text, index) => {
    if (/^\d{0,1}$/.test(text)) {
      // Update the corresponding code value in state
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      // Move focus to the next input field
      if (text.length === 1 && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  const handleKeyPress = (event, index) => {
    // Move focus to the previous input field on backspace
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <View>
      <View style={styles.inputContainer}>
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            value={code[index]}
            onChangeText={(text) => handleCodeChange(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  label: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    padding: 10,
  },
  input: {
    width: 60,
    height: 60,
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",

    borderRadius: 5,

    backgroundColor: theme.colors.input,
  },
});
export default CodeInput;
