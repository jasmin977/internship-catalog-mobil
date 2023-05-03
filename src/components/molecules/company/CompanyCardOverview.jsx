import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../config";
import { CompanyInfoItem } from "../../atoms/company";
const defaultCompanyImage =
  "https://icon-library.com/images/companies-icon/companies-icon-4.jpg";

const CompanyCardOverview = ({ company, taille }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("companyDetailScreen", {
          screen: "companyDetailScreen",
          params: { company },
        })
      }
      style={{
        display: "flex",
        alignSelf: "stretch",
        width: taille,
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

          {/**mail */}

          <Text
            style={{
              color: theme.colors.subtext,
              fontFamily: "text",
              fontSize: 12,
              textTransform: "capitalize",
            }}
          >
            companymail@gmail.com
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            gap: 2,
            flexDirection: "row",
          }}
        >
          <CompanyInfoItem
            color={theme.colors.subtext}
            iconName={"logo-linkedin"}
            text={"website"}
            taille={15}
          />
          <CompanyInfoItem
            color={theme.colors.subtext}
            iconName={"globe-outline"}
            text={"linkedin"}
            taille={15}
          />
        </View>

        <CompanyInfoItem
          color={theme.colors.subtext}
          iconName={"location-outline"}
          text={company.company_city}
          taille={15}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CompanyCardOverview;
