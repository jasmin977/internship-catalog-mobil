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

            flexDirection: "row",
            alignItems: "flex-start",
            paddingVertical: 10,

            gap: 15,
          }}
        >
          {companies.map((company, index) => {
            return <CompanyCard taille={320} company={company} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default MatchedComapniesList;
