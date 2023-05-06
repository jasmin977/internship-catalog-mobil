import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../../config";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ProcessFormContext } from "../../../../context";

const ResultProcess = () => {
  const navigation = useNavigation();
  const { goToPreviousStep } = useContext(ProcessFormContext);
  const editProcess = () => {
    goToPreviousStep();
    navigation.navigate("IntershipProcessScreen");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 5,

          paddingHorizontal: 20,
        }}
      >
        <Text></Text>
        <TouchableOpacity style={{ padding: 5 }} onPress={editProcess}>
          <Ionicons color={theme.colors.bg} size={25} name="create-outline" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: -50,
          gap: 15,
        }}
      >
        <Ionicons color={theme.colors.bg} size={80} name="checkmark-done" />
        <Text
          style={{
            textTransform: "capitalize",
            color: theme.colors.bg,

            fontSize: 23,
            textAlign: "center",
            fontFamily: "title",
          }}
        >
          Application sent successful
        </Text>
        <Text
          style={{
            textTransform: "lowercase",
            color: theme.colors.bg,

            fontSize: 15,
            textAlign: "center",
            fontFamily: "hint",
          }}
        >
          your application is currently being reviewed by our admin team. Please
          be patient as we carefully consider your application.
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Home", {
              screen: "FeedScreen",
            })
          }
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              textTransform: "capitalize",
              fontWeight: "500",
              fontSize: 18,
              color: theme.colors.bg,
              fontFamily: "importantText",
            }}
          >
            home
          </Text>

          <Ionicons
            color={theme.colors.bg}
            size={18}
            name="chevron-forward-outline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultProcess;
