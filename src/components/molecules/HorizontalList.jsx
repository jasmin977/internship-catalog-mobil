import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../config";

const HorizontalList = () => {
  const data = ["web developpmnt", "AI", "mobile dev", "machine learning"];

  return (
    <View style={styles.container}>
      {data.map((item, idx) => (
        <View key={`interest_num${idx}`} style={styles.item}>
          <Text
            style={{
              paddingHorizontal: 15,
              padding: 5,
              fontSize: 18,
              textTransform: "capitalize",

              color: theme.colors.primary,
              fontFamily: "subTitle",
            }}
          >
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    margin: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.input,
  },
});

export default HorizontalList;
