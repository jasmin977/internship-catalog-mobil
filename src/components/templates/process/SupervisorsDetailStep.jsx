import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import React, { useState } from "react";

import { theme } from "../../../config";
import { AppButton, Picker } from "../../atoms";

const SupervisorsDetailStep = ({ action }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    { id: "1", title: "prof 1" },
    { id: "2", title: "prof 2" },
    { id: "3", title: "prof 3" },
    { id: "4", title: "prof 4" },
    // Add more items as needed
  ];

  const handleCheckboxToggle = (item) => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item.id)
      );
    } else if (selectedItems.length < 3) {
      setSelectedItems([...selectedItems, item.id]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => handleCheckboxToggle(item)}
    >
      <View
        style={[
          styles.checkbox,
          selectedItems.includes(item) && styles.checkboxSelected,
        ]}
      />
      <Text style={styles.checkboxLabel}>{item.title}</Text>
    </TouchableOpacity>
  );

  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  return (
    <View
      style={{
        flex: 1,
        width: screenWidth,
        height: 580,

        paddingVertical: 40,
        borderTopEndRadius: 30,
        marginTop: 30,
        borderTopStartRadius: 30,
        backgroundColor: theme.colors.bg,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "title",
          textTransform: "capitalize",
          paddingBottom: 5,
          paddingHorizontal: 20,
          color: theme.colors.text,
        }}
      >
        enter supervisors details 🌱
      </Text>
      <Text
        style={{
          fontSize: 15,
          paddingHorizontal: 20,
          color: theme.colors.subtext,
          fontFamily: "subTitle",
          textTransform: "capitalize",
        }}
      >
        choose 3 Institute supervisors.
      </Text>
      <View style={{ gap: 5, alignItems: "center" }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
        />
      </View>
      <View style={{ width: "100%", position: "absolute", bottom: 0 }}>
        <AppButton onPress={action} title={"save"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#999",
    marginRight: 8,
  },
  checkboxSelected: {
    backgroundColor: "#999",
    borderColor: "#999", // Added to change the border color when selected
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#333",
  },
});

export default SupervisorsDetailStep;
