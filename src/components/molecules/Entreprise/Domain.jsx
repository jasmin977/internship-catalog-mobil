import { View, Text } from "react-native";
import React from "react";
import { splitArray } from "../../../helpers/SplittedArray";
import { theme } from "../../../config";

const Domain = ({ specialties }) => {
  const specialtiesTab = splitArray(specialties);

  return (
    <View style={{ gap: 5 }}>
      {specialtiesTab.map((domain, index) => {
        return (
          <View
            key={index}
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
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
      })}
    </View>
  );
};

export default Domain;
