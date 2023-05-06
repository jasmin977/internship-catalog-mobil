import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { Avatar, Overlay } from "react-native-elements";
import React, { useContext, useEffect, useState } from "react";

import { theme } from "../../../config";
import { AppButton } from "../../atoms";
import { ProcessFormContext } from "../../../context";
import { useNavigation } from "@react-navigation/native";

const data = [
  { id: 1, name: "mohamed ali meddeb", email: "meddeb268@gmail.com" },
  { id: 2, name: "yasmin ben abdeljelil", email: "bayasmin2@gmail.com" },
  { id: 3, name: "youssef majdoub", email: "majdoub@gmail.com" },
  { id: 4, name: "arwa hmila", email: "arwa.kotch@gmail.com" },
  { id: 5, name: "mohamed ali meddeb", email: "meddeb268@gmail.com" },
  { id: 6, name: "yasmin ben abdeljelil", email: "bayasmin2@gmail.com" },
  { id: 8, name: "youssef majdoub", email: "majdoub@gmail.com" },
  { id: 9, name: "arwa hmila", email: "arwa.kotch@gmail.com" },
];
const SupervisorsDetailStep = ({ action }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigation = useNavigation();
  console.log(selectedItems);

  const showToast = () => {
    ToastAndroid.show("You can select 3 only !", ToastAndroid.SHORT);
  };
  const handleCheckboxToggle = (item) => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item.id)
      );
    } else if (selectedItems.length < 3) {
      setSelectedItems([...selectedItems, item.id]);
    }
    if (selectedItems.length === 3) {
      showToast();
    }
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const handleLongPress = () => {
    toggleOverlay();
  };
  const SupervisorItem = ({ item }) => {
    return (
      <TouchableOpacity
        onLongPress={handleLongPress}
        style={styles.checkboxContainer}
        onPress={() => handleCheckboxToggle(item)}
      >
        <View
          style={[
            styles.checkbox,
            selectedItems.includes(item.id) && styles.checkboxSelected,
            { width: screenWidth - 40, justifyContent: "flex-start" },
          ]}
        >
          <Avatar
            size={40}
            containerStyle={{
              backgroundColor: theme.colors.primary,
            }}
            rounded
            title={`${item.name.substring(0, 2).toUpperCase()}`}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.checkboxLabel}>{item.name}</Text>
            <Text style={styles.checkboxEmail}>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  //  choices form

  const { updateprocessForm, goToNextStep, processForm } =
    useContext(ProcessFormContext);

  useEffect(() => {
    if (processForm["step3"]) {
      console.log("step3", processForm["step3"]);
      setSelectedItems(processForm["step3"]);
    }
  }, []);

  const submitStep3 = () => {
    setLoading(true);
    if (selectedItems.length !== 3) {
      showToast();

      setLoading(false);
    } else {
      updateprocessForm({ step3: selectedItems });
      goToNextStep();
      setLoading(false);
      navigation.navigate("ResultProcessScreen");
    }
  };

  const screenWidth = Dimensions.get("window").width;
  return (
    <View
      style={{
        flex: 1,
        width: screenWidth,

        marginTop: 30,

        backgroundColor: theme.colors.bg,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "title",
          textTransform: "capitalize",
          paddingBottom: 5,
          paddingHorizontal: 20,
          color: theme.colors.text,
        }}
      >
        enter supervisors details 🌱
      </Text>
      <Text
        style={{
          fontSize: 15,
          paddingHorizontal: 20,
          color: theme.colors.subtext,
          fontFamily: "subTitle",
          textTransform: "capitalize",
        }}
      >
        choose 3 supervisors from your Institute.
      </Text>
      <View
        style={{
          flex: 1,
          paddingTop: 10,
          paddingBottom: 80,
          alignItems: "center",
        }}
      >
        {data.map((item, index) => {
          return <SupervisorItem key={`supervisoritem_${index}`} item={item} />;
        })}
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
        }}
      >
        <AppButton loading={loading} onPress={submitStep3} title={"save"} />
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={{ width: 300, height: 300 }}>
          <Text>Professor profile here</Text>
        </View>
      </Overlay>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    gap: 20,
  },
  checkboxContainer: {
    alignItems: "flex-start",
    flex: 1,
    // alignItems: "center",
    padding: 5,
  },
  checkbox: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: theme.colors.input,
    borderColor: "transparent",
    borderWidth: 2,
    padding: 10,
    marginRight: 8,
  },
  checkboxSelected: {
    backgroundColor: "rgba(42, 106, 253,0.2)",
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  checkboxLabel: {
    fontSize: 17,

    color: theme.colors.text,
    fontFamily: "text",
    textTransform: "capitalize",
  },
  checkboxEmail: {
    fontSize: 15,

    color: theme.colors.subtext,
    fontFamily: "subTitle",
    textTransform: "lowercase",
  },
});

export default SupervisorsDetailStep;
