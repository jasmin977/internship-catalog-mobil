import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import companies from "../../data/output_2023-03-05_020409.json";

import { useNavigation } from "@react-navigation/native";
import { theme } from "../../config";
import { CompanyCard, CompanyCardOverview } from "../molecules/company";

const MatchedComapniesList = () => {
  const navigation = useNavigation();

  return (
    <View style={{ width: "100%", marginVertical: 20 }}>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontFamily: "title",
            fontSize: 15,
            textTransform: "capitalize",
            color: theme.colors.text,
          }}
        >
          matched companies
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("companies")}>
          <Text
            style={{
              fontFamily: "subTitle",
              fontSize: 15,
              color: theme.colors.subtext,

              textTransform: "capitalize",
            }}
          >
            see all
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true}>
        <View
          style={{
            flex: 1,
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "flex-start",
            paddingHorizontal: 20,
            gap: 5,
          }}
        >
          {companies.map((company, idx) => {
            return (
              <CompanyCardOverview
                key={`match_company_${idx}`}
                taille={300}
                company={company}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default MatchedComapniesList;
