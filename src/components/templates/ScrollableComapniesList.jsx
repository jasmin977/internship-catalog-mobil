import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { theme } from "../../config";
import { CompanyCard, CompanyCardOverview } from "../molecules/company";
import { companiesApi } from "../../api";
import staticcompanies from "../../data/output_2023-03-05_020409.json";

const ScrollableComapniesList = () => {
  const navigation = useNavigation();
  const [companies, setcompanies] = useState([]);
  const fetchCompanies = async () => {
    console.log("test");
    const [res, err] = await companiesApi.getCompanyPage(1);
    if (err) return console.log(err);
    const { data, status } = res;
    if (status === 200) {
      setcompanies(data.companies);
      return;
    }
    // TODO: handle errors or empty response
    console.log("handle failed response");
  };

  useEffect(() => {
    //fetchCompanies();
    setcompanies(staticcompanies);
  }, []);

  return (
    <View
      style={{
        marginTop: 10,
        paddingBottom: 80,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        gap: 10,
      }}
    >
      {companies.map((company, idx) => {
        return (
          <CompanyCardOverview
            key={`match_company_${idx}`}
            taille={320}
            company={company}
          />
        );
      })}
    </View>
  );
};

export default ScrollableComapniesList;
