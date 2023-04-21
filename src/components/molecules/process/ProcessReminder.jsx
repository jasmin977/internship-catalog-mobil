import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../../config";
import { Ionicons } from "@expo/vector-icons";

const ProcessReminder = () => {
  return (
    <TouchableOpacity
      style={{
        width: "90%",
        gap: 5,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        padding: 10,
        marginVertical: 15,
      }}
    >
      <View
        style={{
          gap: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 100,
            backgroundColor: "#32CD32",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons color="white" size={30} name="checkmark-outline" />
        </View>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            fontFamily: "importantText",
            textTransform: "capitalize",
          }}
        >
          personal details
        </Text>
        <View
          style={{
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 2,
            backgroundColor: "#32CD32",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "white",
              fontFamily: "importantText",
              textTransform: "capitalize",
            }}
          >
            completed
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 3,
          height: 20,
          marginHorizontal: 15,
          backgroundColor: "#32CD32",
          borderRadius: 10,
        }}
      ></View>
      <View
        style={{
          gap: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 100,

            borderWidth: 1,
            borderColor: theme.colors.bg,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 100,
              width: 29,
              height: 29,
              backgroundColor: theme.colors.bg,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons color={theme.colors.primary} size={20} name="document" />
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontFamily: "importantText",
              textTransform: "capitalize",
            }}
          >
            company details
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "white",
              fontFamily: "hint",
              textTransform: "capitalize",
            }}
          >
            to complete..
          </Text>
        </View>

        <View
          style={{
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 2,
            backgroundColor: "rgba(255,255,255,0.2)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "white",
              fontFamily: "importantText",
              textTransform: "capitalize",
            }}
          >
            in progress
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProcessReminder;
