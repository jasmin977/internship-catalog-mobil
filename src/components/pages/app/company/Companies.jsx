import { View } from "react-native";
import React from "react";

// import companies from "../../../../data/output_2023-03-05_020409.json";
import { SplittedArray } from "../../../../helpers";
import { Background } from "../../../atoms";
import { CompanyCard } from "../../../molecules/company";

const Companies = ({ companies }) => {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
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
