import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
// import { Specialities } from "../../data/Specialities";
import { theme } from "../../config";

const SpecialityPicker = ({ label, values, selectedIdx, action }) => {
  return (
    <View style={{ gap: 5 }}>
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

      <Picker
        style={styles.picker}
        selectedValue={selectedIdx}
        onValueChange={action}
      >
        <Picker.Item
          style={{
            fontSize: 16,
            fontFamily: "text",
            color: theme.colors.subtext,
          }}
          key="noMajorSelected"
          value="no_major"
          label="no major selected"
        />
        {values.map((item) => {
          return (
            <Picker.Item
              style={{
                fontSize: 16,
                fontFamily: "text",
                color: theme.colors.text,
              }}
              key={item.id}
              value={item.id}
              label={item.name}
            />
          );
        })}
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  picker: {
    //marginVertical: 10,
    width: 315,
    padding: 10,
    fontSize: 16,
    paddingHorizontal: 10,

    backgroundColor: theme.colors.input,
  },
});

export default SpecialityPicker;
