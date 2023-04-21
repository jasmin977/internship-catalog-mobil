import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../../config";
import { CompanyInfoItem } from "../../atoms/company";

const Overview = ({ overview }) => {
  return (
    <View>
      <View style={{ gap: 12, paddingVertical: 20 }}>
        <Text
          style={{
            fontSize: 25,
            color: theme.colors.text,
            fontFamily: "title",
          }}
        >
          Contact
        </Text>
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <CompanyInfoItem iconName="call-outline" text={`Phone: 51241715`} />

          <CompanyInfoItem iconName="mail-outline" text={`Email: 51241715`} />
          <CompanyInfoItem
            iconName="globe-outline"
            text={`Website: 51241715`}
          />
        </View>
      </View>

      <View style={{ gap: 12 }}>
        <Text
          style={{
            fontSize: 25,
            color: theme.colors.text,
            fontFamily: "title",
          }}
        >
          Overview
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "text",
            color: theme.colors.subtext,
          }}
        >
          {overview}
        </Text>
      </View>
    </View>
  );
};

export default Overview;
