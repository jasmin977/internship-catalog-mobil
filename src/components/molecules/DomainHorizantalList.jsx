import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Domain from "../atoms/Domain";
import { theme } from "../../config";

const domains = [
  {
    id: 0,
    name: "all",
  },
  {
    id: 1,
    name: "design",
  },
  {
    id: 2,
    name: "development",
  },
  {
    id: 3,
    name: "security",
  },
  {
    id: 4,
    name: "devops",
  },
  {
    id: 5,
    name: "cloud",
  },
];

export default function DomainHorizantalList() {
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
          most poplular domain
        </Text>
        <TouchableOpacity>
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
            gap: 10,
          }}
        >
          {domains.map((domain, index) => {
            return <Domain domain={domain} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
