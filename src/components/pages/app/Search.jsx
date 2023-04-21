import { TextInput, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import companies from "../../../data/output_2023-03-05_020409.json";
import { Background, GoBackBtn } from "../../atoms";
import { SplittedArray } from "../../../helpers";
import { theme } from "../../../config";
import Companies from "./company/Companies";
import { Text } from "react-native";

const Search = ({ action, header }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(companies);
    setMasterDataSource(companies);
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item) => {
        return item.company_name.toLowerCase().includes(text.toLowerCase());
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
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
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
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
          ({filteredDataSource.length})
        </Text>
      </View>

      <Companies companies={filteredDataSource} />
    </ScrollView>
  );
};

export default Search;
