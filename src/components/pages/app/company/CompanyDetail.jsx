import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppButton, Background, GoBackBtn } from "../../../atoms";
import { CompanyInfoItem } from "../../../atoms/company";
import { Overview, Review } from "../../../templates/company";
import { theme } from "../../../../config";
import { useNavigation } from "@react-navigation/native";
import { Transition, Transitioning } from "react-native-reanimated";
import WriteReview from "./WriteReview";

const StickyHeader = ({ name }) => {
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
        paddingBottom: 20,
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
        {name}
      </Text>
      <Text></Text>
    </View>
  );
};
const CompanyDetail = ({ route }) => {
  const navigation = useNavigation();

  const { company } = route.params;
  const [rating, setRating] = useState(0);
  const [currentView, setCurrentView] = useState("Description");
  const [isCompanySaved, setIsCompanySaved] = useState(false);
  const [isCompanyLiked, setIsCompanyLiked] = useState(true);

  const handleSaveCompany = () => {
    setIsCompanySaved(!isCompanySaved);
  };
  const handleLikeCompany = () => {
    setIsCompanyLiked(!isCompanyLiked);
  };

  {
    /** animation swipe */
  }
  const [isBottomViewVisible, setBottomViewVisible] = useState(false);
  const transitionRef = useRef();
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
  const handlePress = () => {
    setBottomViewVisible(!isBottomViewVisible);
    transitionRef.current.animateNextTransition();
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

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
      <View>
        <ScrollView stickyHeaderIndices={[0]}>
          <StickyHeader name={company.company_name} />
          <View
            style={{
              borderRadius: 10,
              marginHorizontal: 20,
              backgroundColor: theme.colors.input,
              // marginBottom: currentView === "Review" ? 50 : 0,
              alignItems: "center",
              paddingVertical: 30,
            }}
          >
            {currentView === "Review" ? (
              <View
                style={{
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontFamily: "title",
                    color: theme.colors.text,
                  }}
                >
                  Reviews
                </Text>
                <Text
                  style={{
                    fontSize: 60,
                    fontFamily: "title",
                    color: theme.colors.text,
                  }}
                >
                  4.0
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
                  {[0, 1, 2, 3, 4].map((index) => {
                    return (
                      <Ionicons
                        key={`star_index_${index}`}
                        color={theme.colors.primary}
                        size={25}
                        name="star"
                      />
                    );
                  })}
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "hint",
                    color: theme.colors.text,
                    padding: 10,
                  }}
                >
                  based on 23 review
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <View
                  style={{
                    backgroundColor: theme.colors.bg,
                    width: 100,
                    height: 100,

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
                <View style={{ alignItems: "center", gap: 5 }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: "title",
                      color: theme.colors.text,
                    }}
                  >
                    {company.company_name}
                  </Text>
                  {/**location */}
                  <CompanyInfoItem
                    iconName="location-outline"
                    text={company.company_city}
                  />

                  {/**likes& reviews */}
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    {/**likes */}
                    <CompanyInfoItem iconName="heart-outline" text="21 likes" />

                    {/**reviews */}
                    <CompanyInfoItem
                      iconName="chatbox-outline"
                      text="20 reviews"
                    />
                  </View>
                </View>
              </View>
            )}
          </View>

          {/** page details : overview or reviews */}
          <View style={styles.container}>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  currentView === "Description" && styles.activeButton,
                ]}
                onPress={() => handleViewChange("Description")}
              >
                <Text
                  style={[
                    styles.buttonText,
                    currentView === "Description" && styles.activeButtonText,
                  ]}
                >
                  Description
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  currentView === "Review" && styles.activeButton,
                ]}
                onPress={() => handleViewChange("Review")}
              >
                <Text
                  style={[
                    styles.buttonText,
                    currentView === "Review" && styles.activeButtonText,
                  ]}
                >
                  Review
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewContainer}>
              {currentView === "Description" && (
                <Overview overview={company.overview}></Overview>
              )}

              {currentView === "Review" && (
                <Review rating={rating} setRating={setRating} />
              )}
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomButtonsContainer}>
          <AppButton
            onPress={
              currentView === "Description"
                ? handleSaveCompany
                : () => handlePress()
            }
            additionalstyle={{ flex: 7 }}
            title={
              currentView === "Description"
                ? isCompanySaved
                  ? "Company saved!"
                  : "save company"
                : "write review"
            }
            iconName={
              currentView === "Description"
                ? isCompanySaved
                  ? "bookmark"
                  : "bookmark-outline"
                : "chatbox-outline"
            }
          ></AppButton>
          <TouchableOpacity
            onPress={handleLikeCompany}
            style={{
              ...styles.likButton,
              borderWidth: isCompanyLiked ? 0 : 1,
              backgroundColor: isCompanyLiked
                ? "rgba(42, 106, 253, 0.2)"
                : "white",
            }}
          >
            <Ionicons
              color={isCompanyLiked ? theme.colors.primary : theme.colors.text}
              size={35}
              name={isCompanyLiked ? "heart" : "heart-outline"}
            />
          </TouchableOpacity>
        </View>
      </View>
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
              height: 500,
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
              <WriteReview rating={rating} setRating={setRating} />
            </View>
          </View>
        )}
      </Transitioning.View>
    </Transitioning.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingVertical: 20,
  },
  bottomButtonsContainer: {
    flex: 1,
    gap: 10,
    backgroundColor: "white",
    paddingHorizontal: 15,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.input,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "importantText",
    color: theme.colors.subtext,
  },
  activeButton: {
    backgroundColor: theme.colors.primary,
  },
  activeButtonText: {
    color: "#fff",
  },
  viewContainer: {
    paddingBottom: 100,
  },
  likButton: {
    flex: 1,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: "rgba(0, 0, 0, 0.2)",
    alignSelf: "stretch",
  },
});

export default CompanyDetail;
