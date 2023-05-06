import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../../config";
import { CompanyInfoItem } from "../../atoms/company";

const Overview = ({ company }) => {
  return (
    <View>
      <View style={{ gap: 10, paddingVertical: 20, alignItems: "flex-start" }}>
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
          {company.company_phone && (
            <CompanyInfoItem
              iconName="call-outline"
              text={`${company.company_phone}`}
            />
          )}

          {company.company_phone && (
            <CompanyInfoItem
              iconName="mail-outline"
              text={`${company.company_name}@gmail.com`}
            />
          )}
          {company.company_website && (
            <CompanyInfoItem
              iconName="globe-outline"
              text={` ${company.company_website}`}
            />
          )}
          {company.company_linkedin_url && (
            <CompanyInfoItem
              iconName="logo-linkedin"
              text={` ${company.company_linkedin_url}`}
            />
          )}
        </View>
      </View>

      {company.overview && (
        <View style={{ gap: 10, justifyContent: "flex-start" }}>
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
            {company.overview}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Overview;
