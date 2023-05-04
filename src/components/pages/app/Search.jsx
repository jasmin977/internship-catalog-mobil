import { TextInput, View, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";

import companies from "../../../data/output_2023-03-05_020409.json";
import { Background, GoBackBtn } from "../../atoms";

import { theme } from "../../../config";
import Companies from "./company/Companies";

const Search = ({ action, header }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(companies);
  }, []);

  const filterData = (term) => {
    const filteredResults = Companies.filter((item) =>
      item.company_name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const handleSearch = (text) => {
    console.log(text);
    setSearchTerm(text);
    filterData(text);
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
          paddingBottom: 10,
        }}
      >
        <GoBackBtn action={action} />
        <TextInput
          style={{
            backgroundColor: theme.colors.input,
            borderRadius: 10,
            width: "90%",
            padding: 10,
          }}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </View>
    );
  };

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <StickyHeader />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "importantText",
            fontSize: 25,
            margin: 10,
            textTransform: "capitalize",
            color: theme.colors.text,
          }}
        >
          {header}
        </Text>
        <Text
          style={{
            fontFamily: "importantText",
            fontSize: 20,
            color: theme.colors.text,
          }}
        >
          ({filteredData.length})
        </Text>
      </View>

      <Companies companies={filteredData} />
    </ScrollView>
  );
};

export default Search;
