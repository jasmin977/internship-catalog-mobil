import { View, Text } from "react-native";
import React from "react";
import { splitArray } from "../../../helpers/SplittedArray";
import { theme } from "../../../config";

const Domain = ({ specialties }) => {
  return (
    <View style={{ gap: 5, marginHorizontal: 20 }}>
      {specialties ? (
        splitArray(specialties, ",").map((domain, index) => {
          return (
            <View key={index} style={{}}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "MyFont-Regular",
                  color: theme.colors.text,
                }}
              >
                {domain}
              </Text>
            </View>
          );
        })
      ) : (
        <Text>No found</Text>
      )}
    </View>
  );
};

export default Domain;
