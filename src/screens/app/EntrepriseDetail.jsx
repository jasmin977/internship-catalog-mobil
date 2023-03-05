import { View, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../../components/atoms/Background";
import { theme } from "../../config";
import ButtonView from "../../components/atoms/SwitchButton";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GoBackBtn from "../../components/atoms/GoBackBtn";

const StickyHeader = ({ name }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        backgroundColor: theme.colors.bg,
        alignItems: "center",
        gap: 5,
        paddingBottom: 10,
      }}
    >
      <GoBackBtn />
      <Text
        style={{
          fontSize: 20,
          fontFamily: "MyFont-SemiBold",
          color: theme.colors.text,
        }}
      >
        {name}
      </Text>
    </View>
  );
};
const EntrepriseDetail = ({ route }) => {
  const { company } = route.params;
  return (
    <Background>
      <View style={{ marginBottom: 50 }}>
        <ScrollView stickyHeaderIndices={[0]}>
          <StickyHeader name={company.company_name} />
          <View
            style={{
              borderRadius: 10,
              width: "100%",
              // borderWidth: 0.5,
              backgroundColor: theme.colors.input,
              gap: 10,
              alignItems: "center",
              paddingVertical: 30,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.bg,
                borderRadius: 20,
                elevation: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: company.company_logo_url,
                }}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "MyFont-SemiBold",
                  color: theme.colors.text,
                }}
              >
                {company.company_name}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "MyFont-SemiBold",
                    color: theme.colors.primary,
                  }}
                >
                  {company.company_website}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ButtonView company={company}></ButtonView>
        </ScrollView>
      </View>
    </Background>
  );
};

export default EntrepriseDetail;
