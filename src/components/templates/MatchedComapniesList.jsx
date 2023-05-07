import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { theme } from "../../config";
import { CompanyCard, CompanyCardOverview } from "../molecules/company";
import { companiesApi } from "../../api";
import staticcompanies from "../../data/output_2023-03-05_020409.json";
import { useRequest } from "../../hooks";

const MatchedComapniesList = () => {
  const { isLoading, data, error, refresh } = useRequest(
    companiesApi.getCompanyPage(2)
  );
  const navigation = useNavigation();
  const [companies, setcompanies] = useState([]);

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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("companies", {
              screen: "CompaniesSearchScreen",
            })
          }
        >
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
          {data &&
            data.companies.map((company, idx) => {
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

      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          paddingTop: 20,
          marginBottom: -20,
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
          Companies that you may like
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("companies", {
              screen: "CompaniesSearchScreen",
            })
          }
        >
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
    </View>
  );
};

export default MatchedComapniesList;
