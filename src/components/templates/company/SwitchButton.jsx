import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Overview from "./Overview";
import Review from "./Review";
import { theme } from "../../../config";

const ButtonView = ({ company }) => {
  const [currentView, setCurrentView] = useState("Description");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            currentView === "Description" && styles.activeButton,
          ]}
          onPress={() => handleViewChange("Description")}
        >
          <Text
            style={[
              styles.buttonText,
              currentView === "Description" && styles.activeButtonText,
            ]}
          >
            Description
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            currentView === "Review" && styles.activeButton,
          ]}
          onPress={() => handleViewChange("Review")}
        >
          <Text
            style={[
              styles.buttonText,
              currentView === "Review" && styles.activeButtonText,
            ]}
          >
            Review
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewContainer}>
        {currentView === "Description" && (
          <Overview overview={company.overview}></Overview>
        )}

        {currentView === "Review" && <Review />}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingVertical: 20,
  },
  button: {
    width: "44%",
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.input,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
    color: theme.colors.subtext,
  },
  activeButton: {
    backgroundColor: theme.colors.primary,
  },
  activeButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  viewContainer: {
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
});

export default ButtonView;
