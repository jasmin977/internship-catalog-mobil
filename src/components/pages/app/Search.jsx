import { TextInput, View, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";

// import companiesList from "../../../data/output_2023-03-05_020409.json";
import { Background, GoBackBtn } from "../../atoms";

import { theme } from "../../../config";
import Companies from "./company/Companies";
import { companiesApi } from "../../../api";
import { Button } from "react-native";

const StickyHeader = ({ action, searchTerm, handleSearch }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.colors.bg,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 10,
        flexDirection: "row",
        paddingTop: 20,
        gap: 10,
      }}
    >
      <GoBackBtn action={action} />
      <TextInput
        style={{
          backgroundColor: theme.colors.input,
          borderRadius: 10,
          flex: 1,
          padding: 10,
        }}
        placeholder="Search..."
        defaultValue={searchTerm}
        onChangeText={(t) => handleSearch(t)}
      />
    </View>
  );
};

const Search = ({ action, header }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const filterData = async (query) => {
    const [{ data, status, headers }, err] =
      await companiesApi.companyAutoComplete(query);
    if (err) console.log(err);
    if (status !== 200) {
      setError(data.message);
    }
    console.log(data.result);
    if (data?.success) setFilteredData(data.result);
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text.length > 1) filterData(text);
  };

  // useEffect(() => {
  //   setFilteredData(companiesList);
  // }, []);

  if (error) {
    return (
      <Background>
        <Text>{error}</Text>
        <Button
          title="Try again"
          onPress={fetchCompanies}
          color={theme.colors.primary}
        />
      </Background>
    );
  }

  return (
    <>
      <StickyHeader
        handleSearch={handleSearch}
        action={action}
        searchTerm={searchTerm}
      />
      <ScrollView
        style={{ backgroundColor: theme.colors.bg }}
        stickyHeaderIndices={[0]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: theme.colors.bg,
          }}
        >
          {header && (
            <Text
              style={{
                fontFamily: "importantText",
                fontSize: 25,
                // margin: 10,
                textTransform: "capitalize",
                color: theme.colors.text,
              }}
            >
              {header}
            </Text>
          )}
          <Text
            style={{
              fontFamily: "importantText",
              fontSize: 18,
              color: theme.colors.text,
            }}
          >
            Results ({filteredData.length})
          </Text>
        </View>
        {isLoading ? (
          <Background>
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </Background>
        ) : (
          <Companies companies={filteredData} />
        )}
      </ScrollView>
    </>
  );
};

export default Search;
