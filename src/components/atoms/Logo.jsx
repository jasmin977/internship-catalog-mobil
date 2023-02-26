import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image source={require("../../../assets/logoBlue.png")} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 160,
    marginBottom: 8,
  },
});
