import { View, Text, StatusBar } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../../config";
import { GoBackBtn } from "../../../atoms";

const ResultProcess = () => {
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
          paddingTop: 20,
          paddingHorizontal: 15,
        }}
      >
        <GoBackBtn color={theme.colors.bg} />

        <Text
          style={{
            color: theme.colors.bg,
            fontSize: 20,
            fontFamily: "importantText",
          }}
        >
          PFE/SFE application!
        </Text>
        <Text></Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

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
      </View>
    </View>
  );
};

export default ResultProcess;
