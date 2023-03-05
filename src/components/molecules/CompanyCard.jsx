import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { theme } from "../../config";
import { useNavigation } from "@react-navigation/native";
import { splitArray } from "../../helpers/SplittedArray";
const defaultCompanyImage =
  "https://icon-library.com/images/companies-icon/companies-icon-4.jpg";

const CompanyCard = ({ company, taille }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("entreprises", {
          screen: "EntrepriseDetailScreen",
          params: { company },
        })
      }
      style={{
        display: "flex",

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
          display: "flex",
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
        <View
          style={{
            display: "flex",
            gap: 10,
            width: "70%",
          }}
        >
          {/**name & rate */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              {/**name */}
              <Text
                style={{
                  fontSize: 17,
                  maxWidth: 150,
                  fontFamily: "MyFont-SemiBold",
                  lineHeight: 20,
                  //letterSpacing: 1,
                  textTransform: "capitalize",
                  color: theme.colors.text,
                }}
              >
                {company.company_name}
              </Text>

              {/**rate */}

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                }}
              >
                {[0, 1, 2, 3].map((idx) => {
                  return (
                    <AntDesign
                      key={`${company.company_name}_start_${idx}`}
                      color={theme.colors.primary}
                      size={15}
                      name="star"
                    />
                  );
                })}
                <Text>4.0</Text>
              </View>
            </View>

            {/**save button */}
            <View
              style={{
                borderRadius: 50,
                borderWidth: 1,
                borderColor: theme.colors.subtext,
                padding: 5,
              }}
            >
              <Ionicons
                color={theme.colors.text}
                size={25}
                name="bookmark-outline"
              />
            </View>
          </View>
          {/**domain */}
          <View
            style={{
              flexDirection: "row",
              gap: 5,
            }}
          >
            {/**company.domain.map((skill, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: theme.colors.primary,
                    borderRadius: 5,
                    borderWidth: 1.5,
                    borderColor: theme.colors.primary,
                    padding: 2,
                    fontSize: 12,
                    fontFamily: "MyFont-SemiBold",
                    letterSpacing: 1,
                    paddingHorizontal: 5,
                  }}
                >
                  {skill}
                </Text>
              );
            })*/}
          </View>
        </View>
      </View>

      {/** details : mail - phone - location */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "flex-end",

          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/**phone */}
          {!company.company_phone ? null : splitArray(
              company.company_phone,
              "\n"
            ).length > 1 ? (
            splitArray(company.company_phone, "\n").map((phone, idx) => {
              return (
                <View
                  key={`${company.company_name}__phone_${idx}`}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    color={theme.colors.subtext}
                    size={15}
                    name="call-outline"
                  />
                  <Text style={{ color: theme.colors.subtext }}>{phone}</Text>
                </View>
              );
            })
          ) : (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Ionicons
                color={theme.colors.subtext}
                size={15}
                name="call-outline"
              />
              <Text style={{ color: theme.colors.subtext }}>
                {company.company_phone}
              </Text>
            </View>
          )}

          {/**mail */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Ionicons
              color={theme.colors.subtext}
              size={15}
              name="mail-outline"
            />
            <Text style={{ color: theme.colors.subtext }}>
              {company.company_website}
            </Text>
          </View>
        </View>

        {/**location */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Ionicons
            color={theme.colors.subtext}
            size={15}
            name="location-outline"
          />
          <Text style={{ color: theme.colors.subtext }}>
            {company.company_city}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CompanyCard;
