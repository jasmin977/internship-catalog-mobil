import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../../config";
import { Domain, Overview, Review } from "../molecules/Entreprise";

const ButtonView = ({ company }) => {
  const [currentView, setCurrentView] = useState("Overview");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            currentView === "Overview" && styles.activeButton,
          ]}
          onPress={() => handleViewChange("Overview")}
        >
          <Text
            style={[
              styles.buttonText,
              currentView === "Overview" && styles.activeButtonText,
            ]}
          >
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            currentView === "Domain" && styles.activeButton,
          ]}
          onPress={() => handleViewChange("Domain")}
        >
          <Text
            style={[
              styles.buttonText,
              currentView === "Domain" && styles.activeButtonText,
            ]}
          >
            Domain
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
        {currentView === "Overview" && (
          <Overview overview={company.overview}></Overview>
        )}
        {currentView === "Domain" && (
          <Domain specialties={company.specialties} />
        )}
        {currentView === "Review" && <Review />}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: theme.colors.input,
    borderBottomWidth: 2.5,

    marginTop: 20,
    gap: 20,
  },
  button: {
    padding: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
    color: theme.colors.subtext,
  },
  activeButton: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2.5,
  },
  activeButtonText: {
    color: theme.colors.primary,
    fontWeight: "600",
  },
  viewContainer: {
    marginTop: 20,
  },
});

export default ButtonView;
