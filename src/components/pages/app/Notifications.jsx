import { View, Text } from "react-native";
import React from "react";
import { Background, GoBackBtn } from "../../atoms";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import { theme } from "../../../config";
import { Ionicons } from "@expo/vector-icons";

const Notification = ({ title, message, time }) => {
  return (
    <View style={styles.notificationContainer}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          color={theme.colors.text}
          size={25}
          name="ellipsis-horizontal-outline"
        />
      </View>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};
const notificationsData = [
  {
    id: 1,
    title: "Notification 1",
    message: "This is notification 1",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "Notification 2",
    message: "This is notification 2",
    time: "11:30 AM",
  },
  {
    id: 3,
    title: "Notification 3",
    message: "This is notification 3",
    time: "2:45 PM",
  },
  {
    id: 4,
    title: "Notification 3",
    message: "This is notification 3",
    time: "2:45 PM",
  },
  {
    id: 5,
    title: "Notification 3",
    message: "This is notification 3",
    time: "2:45 PM",
  },
  {
    id: 856,
    title: "Notification 3",
    message: "This is notification 3",
    time: "2:45 PM",
  },
  {
    id: 45,
    title: "Notification 3",
    message: "This is notification 3",
    time: "2:45 PM",
  },
  {
    id: 55,
    title: "Notification 3",
    message: "This is notification 3",
    time: "2:45 PM",
  },
  {
    id: 566,
    title: "Notification 3",
    message: "This is notification 3",
    time: "2:45 PM",
  },
];

const StickyHeader = ({ header }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",

        backgroundColor: theme.colors.bg,
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <GoBackBtn />
      <Text
        style={{
          fontSize: 20,
          fontFamily: "importantText",
          color: theme.colors.text,
        }}
      >
        {header}
      </Text>

      <Text></Text>
    </View>
  );
};

const Notifications = () => {
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.bg }}
      stickyHeaderIndices={[0]}
    >
      <StickyHeader header={"Notification"} />
      <View style={{ height: 10 }}></View>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Notification
            title={item.title}
            message={item.message}
            time={item.time}
          />
        )}
      />
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: theme.colors.input,
    marginHorizontal: 20,
    padding: 16,
    marginBottom: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "importantText",

    color: theme.colors.primary,
  },
  message: {
    fontSize: 15,
    fontFamily: "text",
  },
  time: {
    fontSize: 12,
    fontFamily: "hint",
    color: theme.colors.subtext,
    marginTop: 8,
  },
});

export default Notifications;
