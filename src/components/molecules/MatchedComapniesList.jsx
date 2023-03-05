import { View, Text } from "react-native";
import React from "react";
import companies from "../../data/output_2023-03-05_020409.json";
import CompanyCard from "./CompanyCard";
import { theme } from "../../config";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

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
            fontFamily: "MyFont-SemiBold",
            fontSize: 15,
            textTransform: "capitalize",
            color: theme.colors.text,
          }}
        >
          matched companies
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("entreprises")}>
          <Text
            style={{
              fontFamily: "MyFont-Regular",
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
              <CompanyCard
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
