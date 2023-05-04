import { TextInput, View, ScrollView } from "react-native";
import React, { useState } from "react";

import companies from "../../../../data/output_2023-03-05_020409.json";
import { SplittedArray } from "../../../../helpers";
import { Background } from "../../../atoms";
import { CompanyCard } from "../../../molecules/company";
import { theme } from "../../../../config";

const Companies = ({ companies }) => {
  return (
    <View
      style={{
        flex: 1,

        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100,
      }}
    >
      {companies.map((company, idx) => (
        <CompanyCard
          // taille={320}
          company={company}
          key={`filtred_company_${idx}`}
        />
      ))}
    </View>
  );
};

export default Companies;
