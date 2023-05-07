import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppButton, Background, GoBackBtn } from "../../../atoms";
import { CompanyInfoItem } from "../../../atoms/company";
import { Overview, Review } from "../../../templates/company";
import { theme } from "../../../../config";
import { Transition, Transitioning } from "react-native-reanimated";
import WriteReview from "./WriteReview";
import useRequest from "../../../../hooks/useRequest";
import useRequestDispatcher from "../../../../hooks/useRequestDispatcher";
import { companiesApi } from "../../../../api";
const defaultCompanyImage =
  "https://icon-library.com/images/companies-icon/companies-icon-4.jpg";

const StickyHeader = ({ name }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.colors.bg,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 10,
        flexDirection: "row",
        paddingTop: 20,
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
  let company;
  if (route.params === undefined) {
    company = {};
  } else {
    company = route.params.company;
  }
  const { setOption, data, isLoading } = useRequest(
    companiesApi.getCompanybyId(company.id)
  );
  const {
    setOption: setReviewOption,
    data: companyReviews,
    isLoading: isLoadingReview,
  } = useRequest(companiesApi.getCompanyReviews(company.id));
  const { send: likeCompany, setOption: setLikeCompanyRequestOption } =
    useRequest(companiesApi.likeCompany(company.id), false);
  const { send: saveCompany, setOption: setSaveCompanyRequestOption } =
    useRequest(companiesApi.saveCompany(company.id), false);
  const { send: submitReview } = useRequest(
    companiesApi.reviewCompany(),
    false
  );

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [currentView, setCurrentView] = useState("Description");
  const [isCompanySaved, setIsCompanySaved] = useState(false);
  const [isCompanyLiked, setIsCompanyLiked] = useState(true);

  const handleSaveCompany = () => {
    saveCompany();
    setIsCompanySaved(!isCompanySaved);
  };
  const handleLikeCompany = () => {
    likeCompany();
    setIsCompanyLiked(!isCompanyLiked);
  };
  const handleSubmitCompanyReview = () => {
    console.log("sbmiting review");
    submitReview({ rating, content: review, companyId: company.id });
    toggleBottomViewVisibility();
  };

  useEffect(() => {
    setOption(companiesApi.getCompanybyId(company.id));
    setLikeCompanyRequestOption(companiesApi.likeCompany(company.id));
    setSaveCompanyRequestOption(companiesApi.saveCompany(company.id));
  }, [route.params.company]);

  /** animation swipe */
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
  const toggleBottomViewVisibility = () => {
    setBottomViewVisible(!isBottomViewVisible);
    transitionRef.current.animateNextTransition();
  };

  useEffect(() => {
    console.log("mount company detail");
    return () => {
      console.log("mount company detail");
    };
  }, []);

  const handleViewChange = (view) => {
    setCurrentView(view);
  };
  return (
    <Transitioning.View
      ref={transitionRef}
      transition={transition}
      style={{
        flex: 1,
        backgroundColor: theme.colors.bg,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        {data && (
          <StickyHeader name={isLoading ? "" : data.company.company_name} />
        )}
        {isLoading ? (
          <View
            style={{
              flex: 1,
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </View>
        ) : (
          <ScrollView indicatorStyle="white">
            {/* start screen card */}
            <View
              style={{
                borderRadius: 10,
                marginHorizontal: 15,
                backgroundColor: theme.colors.input,
                alignItems: "center",
                paddingVertical: 30,
                paddingHorizontal: 20,
                marginTop: 20,
                flexGrow: 1,
              }}
            >
              {currentView === "Review"
                ? companyReviews && (
                    <CompanyReviewCard
                      nbReview={companyReviews.nbReview}
                      avgRating={companyReviews.avgRating}
                    />
                  )
                : data && <CompanyDescriptionCard company={data.company} />}
            </View>
            {/* end screen card */}

            {/** page details : overview or reviews */}
            <View style={styles.container}>
              {/* start button contaienr */}

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
              {/* end button contaienr */}

              <View style={styles.viewContainer}>
                {currentView === "Description" && data && (
                  <Overview company={data.company} />
                )}

                {currentView === "Review" && companyReviews && (
                  <Review
                    reviews={companyReviews.reviews}
                    rating={rating}
                    setRating={setRating}
                  />
                )}
              </View>
            </View>
          </ScrollView>
        )}
        <View style={styles.bottomButtonsContainer}>
          <AppButton
            onPress={
              currentView === "Description"
                ? handleSaveCompany
                : () => toggleBottomViewVisibility()
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
      {/* start ReviewFormModel */}
      <Transitioning.View
        ref={transitionRef}
        transition={transition}
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        {isBottomViewVisible && (
          <ReviewFormModel
            rating={rating}
            setRating={setRating}
            review={review}
            setReview={setReview}
            handleSubmitCompanyReview={handleSubmitCompanyReview}
            toggleBottomViewVisibility={toggleBottomViewVisibility}
          />
        )}
      </Transitioning.View>
      {/* end ReviewFormModel */}
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
    backgroundColor: theme.colors.bg,
    paddingHorizontal: 10,
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
  modelContainer: {
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    elevation: 10,
    height: 500,
    zIndex: 2,
  },
});

export default CompanyDetail;

const CompanyReviewCard = ({ avgRating, nbReview }) => {
  return (
    <View style={{ alignItems: "center", gap: 10 }}>
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
        {parseInt(avgRating).toFixed(1)}
      </Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
        {Array.from({ length: parseInt(avgRating) }).map((index) => {
          return (
            <Ionicons
              key={index}
              color={theme.colors.primary}
              size={25}
              name="star"
            />
          );
        })}
      </View>
      {nbReview && (
        <Text
          style={{
            fontSize: 15,
            fontFamily: "hint",
            color: theme.colors.text,
            padding: 10,
          }}
        >
          based on {nbReview} review
        </Text>
      )}
    </View>
  );
};
const CompanyDescriptionCard = ({ company }) => {
  return (
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
            uri: company.company_logo_url
              ? company.company_logo_url
              : defaultCompanyImage,
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
            textAlign: "center",
            fontFamily: "title",
            color: theme.colors.text,
          }}
        >
          {company.company_name}
        </Text>
        {/**location */}

        {(company.company_address || company.company_city) && (
          <CompanyInfoItem
            iconName="location-outline"
            text={`${company.company_address}, ${company.company_city}`}
          />
        )}
        {/**likes& reviews */}
        <View style={{ flexDirection: "row", gap: 10 }}>
          {/**likes */}
          <CompanyInfoItem iconName="heart-outline" text="21 likes" />

          {/**reviews */}
          <CompanyInfoItem iconName="chatbox-outline" text="20 reviews" />
        </View>
      </View>
    </View>
  );
};

const ReviewFormModel = ({
  toggleBottomViewVisibility,
  rating,
  setRating,
  review,
  setReview,
  handleSubmitCompanyReview,
}) => {
  return (
    <View style={styles.modelContainer}>
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
          onPress={toggleBottomViewVisibility}
          style={{
            alignSelf: "flex-end",
            backgroundColor: theme.colors.input,
            borderRadius: 10,
            padding: 5,
          }}
        >
          <Ionicons color={theme.colors.text} size={25} name="close-outline" />
        </TouchableOpacity>
        <WriteReview
          rating={rating}
          setRating={setRating}
          review={review}
          setReview={setReview}
          handleSubmit={handleSubmitCompanyReview}
        />
      </View>
    </View>
  );
};
