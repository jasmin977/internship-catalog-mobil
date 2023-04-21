import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../config";
import { Dimensions } from "react-native";
const defaultCompanyImage =
  "https://icon-library.com/images/companies-icon/companies-icon-4.jpg";

const CompanyCard = ({ company, taille }) => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("companies", {
          screen: "companyDetailScreen",
          params: { company },
        })
      }
      style={{
        alignSelf: "center",
        width: screenWidth - 30,
        borderRadius: 20,
        backgroundColor: theme.colors.input,
        padding: 10,
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {/**company image */}
        <View
          style={{
            backgroundColor: theme.colors.bg,
            borderRadius: 20,

            width: "25%",
            height: 70,
            elevation: 5,
            shadowColor: theme.colors.subtext,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: company.company_logo_url
                ? company.company_logo_url
                : defaultCompanyImage,
            }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              borderRadius: 20,
            }}
          />
        </View>

        {/**name & location */}
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {/**name */}
          <Text
            style={{
              fontSize: 17,
              width: "100%",
              fontFamily: "title",

              textTransform: "capitalize",
              color: theme.colors.text,
            }}
          >
            {company.company_name}
          </Text>

          {/**location */}
          <View
            style={{
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Ionicons
              color={theme.colors.subtext}
              size={15}
              name="location-outline"
            />
            <Text
              style={{
                color: theme.colors.subtext,
                fontFamily: "text",

                textTransform: "capitalize",
              }}
            >
              {company.company_city}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CompanyCard;
