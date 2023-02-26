import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { theme } from "../../config/theme";
import { Specialities } from "../../data/Specialities";

const SpecialityPicker = () => {

  const [choosenValue, setChoosenValue] = useState(2);
  const [choosenIndex, setChoosenIndex] = useState(1);
  return (
    <View>
      <Picker
        style={styles.picker}
        selectedValue={choosenValue}
        onValueChange={(itemValue, itemIndex) => {
          setChoosenValue(itemValue);
          setChoosenIndex(itemIndex);
        }}
      >
        {Specialities.map((item) => {
          return <Picker.Item key={item.id} value={item.id} label={item.title} />;
        })}
      </Picker>

     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
  },
 
  picker: {
    marginVertical: 10,
    width: 320,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: theme.colors.input,
  },
});

export default SpecialityPicker;
