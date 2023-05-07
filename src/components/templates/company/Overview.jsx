import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../../config";
import { CompanyInfoItem } from "../../atoms/company";

const Overview = ({ company }) => {
  return (
    <View style={{ gap: 30 }}>
      <View style={{ gap: 20 }}>
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
            gap: 10,
          }}
        >
          {company.company_phone && (
            <CompanyInfoItem
              iconName="call-outline"
              label="Phone"
              text={`${company.company_phone}`}
            />
          )}

          {company.company_phone && (
            <CompanyInfoItem
              iconName="mail-outline"
              label="Email"
              text={`${company.company_name}@gmail.com`}
            />
          )}
          {company.company_website && (
            <CompanyInfoItem
              iconName="globe-outline"
              label="Website"
              text={` ${company.company_website}`}
            />
          )}
          {company.company_linkedin_url && (
            <CompanyInfoItem
              iconName="logo-linkedin"
              label="Linkedin"
              type="link"
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
