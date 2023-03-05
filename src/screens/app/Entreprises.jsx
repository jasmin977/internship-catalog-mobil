import { TextInput, View } from "react-native";
import React, { useState } from "react";
import Background from "../../components/atoms/Background";
import { theme } from "../../config";

import CompanyCard from "../../components/molecules/CompanyCard";
import companies from "../../data/output_2023-03-05_020409.json";
import { splitArray } from "../../helpers/SplittedArray";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Entreprises = () => {
  const [filteredCompanies, setfilteredCompanies] = useState(companies);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = companies.filter((item) => {
      return (
        (item.specialties &&
          splitArray(item.specialties).some(
            (item) => item === query.toLowerCase()
          )) ||
        (item.company_name &&
          item.company_name.toLowerCase().includes(query.toLowerCase())) ||
        (item.company_city &&
          item.company_city.toLowerCase().includes(query.toLowerCase()))
      );
    });
    setfilteredCompanies(filtered);
  };

  const StickyHeader = () => {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          backgroundColor: theme.colors.bg,
          alignItems: "center",
          gap: 5,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <TextInput
          style={{
            backgroundColor: theme.colors.input,
            borderRadius: 10,
            width: "100%",
            padding: 10,
          }}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
    );
  };

  return (
    <Background>
      {/** 
       * <Text
        style={{
          alignSelf: "flex-start",
          marginVertical: 20,
          fontFamily: "MyFont-Regular",
          fontSize: 15,
          color: theme.colors.text,
        }}
      >
        {filteredCompanies.length} results
      </Text>
       */}

      <ScrollView stickyHeaderIndices={[0]}>
        <StickyHeader />
        <View
          style={{
            flex: 1,
            gap: 10,
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          {filteredCompanies.map((company, index) => {
            if (index < 15)
              return <CompanyCard taille={320} company={company} key={index} />;
          })}
        </View>
      </ScrollView>
    </Background>
  );
};

export default Entreprises;
