import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { Background } from "../../atoms";
import StickyHeader from "../../molecules/StickyHeader";
import { theme } from "../../../config";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../../context";
import { Image } from "react-native";
import { CompanyInfoItem } from "../../atoms/company";
import { Transition, Transitioning } from "react-native-reanimated";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HorizontalList from "../../molecules/HorizontalList";

const Profile = ({ personData }) => {
  const { userInfo, removeUserCredential } = useContext(AuthContext);
  {
    /**animated bottom view */
  }
  const [isBottomViewVisible, setBottomViewVisible] = useState(false);
  const transitionRef = useRef();

  const handlePress = () => {
    setBottomViewVisible(!isBottomViewVisible);
    transitionRef.current.animateNextTransition();
  };

  const transition = (
    <Transition.Together>
      <Transition.Out
        type="slide-bottom"
        durationMs={200}
        interpolation="easeIn"
      />
      <Transition.In
        type="slide-bottom"
        durationMs={200}
        delayMs={100}
        interpolation="easeOut"
      />
    </Transition.Together>
  );

  const InfoItem = ({ title, info }) => {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "title",
            color: theme.colors.subtext,
            textTransform: "capitalize",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "title",
            color: theme.colors.text,
            textTransform: "capitalize",
          }}
        >
          {info}
        </Text>
      </View>
    );
  };
  if (!personData) {
    personData = userInfo;
  }

  const SettingItem = ({ name, iconName, routeName, action }) => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity
        onPress={
          action ? action : () => routeName && navigation.navigate(routeName)
        }
        style={{
          width: "100%",
          justifyContent: "space-between",

          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            gap: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.input,
              borderRadius: 10,
              padding: 5,
            }}
          >
            <Ionicons color={theme.colors.text} size={25} name={iconName} />
          </View>

          <Text
            style={{
              fontSize: 20,
              color: theme.colors.text,
              fontFamily: "title",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Text>
        </View>
        <Ionicons
          color={theme.colors.text}
          size={25}
          name="chevron-forward-outline"
        />
      </TouchableOpacity>
    );
  };

  const navigation = useNavigation();
  return (
    <Transitioning.View
      ref={transitionRef}
      transition={transition}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: StatusBar.currentHeight + 20,
        backgroundColor: theme.colors.bg,
      }}
    >
      <View style={{}}>
        <ScrollView stickyHeaderIndices={[0]}>
          <StickyHeader
            rightaction={() => handlePress()}
            profileRoute={"profile"}
            name={personData.first_name}
          />
          <ImageBackground
            source={require("../../../../assets/banner.png")}
            style={{
              flex: 1,
              borderRadius: 10,
              marginHorizontal: 20,
              height: 100,

              alignItems: "center",
              paddingVertical: 30,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.bg,
                width: 130,
                height: 130,

                borderRadius: 20,
                elevation: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png",
                }}
                style={{
                  width: 130,
                  height: 130,

                  borderRadius: 20,
                  resizeMode: "contain",
                }}
              />
            </View>

            <Text
              style={{
                fontSize: 24,
                fontFamily: "title",
                paddingVertical: 5,
                color: theme.colors.text,
                textTransform: "capitalize",
              }}
            >
              {personData.first_name} {personData.last_name}
            </Text>
          </ImageBackground>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 120,
              margin: 20,
              backgroundColor: theme.colors.bg,
              borderRadius: 8,
              padding: 10,
              //    elevation: 15,
              shadowColor: "gray",
            }}
          >
            <InfoItem title={"major"} info={"engeneering"} />
            <InfoItem title={"born"} info={"19 dec,1999"} />
            <InfoItem title={"from"} info={"sousse"} />
          </View>
          {/**edit profile */}
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 16,
              marginHorizontal: 20,

              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.colors.primary,
            }}
            onPress={() => {
              navigation.navigate("EditProfileScreen");
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "title",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              edit profile
            </Text>
          </TouchableOpacity>
          {/**contact */}
          <View style={{ gap: 10, padding: 20 }}>
            <Text
              style={{
                fontSize: 20,
                textTransform: "capitalize",

                color: theme.colors.text,
                fontFamily: "title",
              }}
            >
              Contact
            </Text>
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <CompanyInfoItem
                iconName="call-outline"
                text={`Phone: 51241715`}
              />

              <CompanyInfoItem
                iconName="mail-outline"
                text={`Email: yasmin@issatso-sousse.tn`}
              />
            </View>
          </View>

          {/**about me */}
          <View style={{ gap: 10, paddingHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 20,
                color: theme.colors.text,
                fontFamily: "title",
                textTransform: "capitalize",
              }}
            >
              About me
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "text",
                color: theme.colors.subtext,
              }}
            >
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
            </Text>
          </View>

          {/**interest*/}
          <View style={{ gap: 10, padding: 20, paddingBottom: 100 }}>
            <Text
              style={{
                fontSize: 20,
                textTransform: "capitalize",

                color: theme.colors.text,
                fontFamily: "title",
              }}
            >
              interest
            </Text>

            <HorizontalList />
          </View>
        </ScrollView>
        {/* The bottom view */}
        <Transitioning.View
          ref={transitionRef}
          transition={transition}
          style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
        >
          {isBottomViewVisible && (
            <View
              style={{
                backgroundColor: "white",
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
                elevation: 10,
                height: 450,
                zIndex: 2,
              }}
            >
              <View style={{ height: 20 }} />

              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: theme.colors.primary,
                    width: 50,
                    height: 5,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ flex: 1, padding: 20, gap: 10 }}>
                <TouchableOpacity
                  onPress={handlePress}
                  style={{
                    alignSelf: "flex-end",
                    backgroundColor: theme.colors.input,
                    borderRadius: 10,
                    padding: 5,
                  }}
                >
                  <Ionicons
                    color={theme.colors.text}
                    size={25}
                    name="close-outline"
                  />
                </TouchableOpacity>
                <SettingItem
                  routName={"LikedCompaniesScreen"}
                  name={"Liked companies"}
                  iconName={"heart-outline"}
                />
                <SettingItem
                  routName={"SavedCompaniesScreen"}
                  name={"Saved companies"}
                  iconName={"bookmark-outline"}
                />
                <View
                  style={{
                    width: "70%",
                    alignSelf: "center",
                    marginVertical: 20,
                    height: 2,
                    backgroundColor: theme.colors.input,
                  }}
                />
                <SettingItem
                  name={"Settings"}
                  routName={"SettingScreen"}
                  iconName={"settings-outline"}
                />
                <SettingItem
                  action={() => removeUserCredential()}
                  name={"Log Out"}
                  iconName={"log-out-outline"}
                />
              </View>
            </View>
          )}
        </Transitioning.View>
      </View>
    </Transitioning.View>
  );
};

export default Profile;
