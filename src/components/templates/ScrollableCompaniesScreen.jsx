import { View, Text, Animated, StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import companiesList from "../../data/output_2023-03-05_020409.json";
import { CompanyCard, CompanyCardOverview } from "../molecules/company";
import { theme } from "../../config";
import { companiesApi } from "../../api";
import { AppButton, Background, InputWithIcons } from "../atoms";
import { ActivityIndicator } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FeedHeader } from "../molecules";
import MatchedComapniesList from "./MatchedComapniesList";
import { useRequest } from "../../hooks";

const getCloser = (value, checkOne, checkTwo) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

const { diffClamp } = Animated;
const headerHeight = 140 * 2;

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.bg,
          paddingTop: 40,
        },
        {
          elevation: 5,
          height: headerHeight / 1.4,
        },
      ]}
    >
      <FeedHeader />
      <InputWithIcons
        action={() =>
          navigation.navigate("companies", { screen: "CompaniesSearchScreen" })
        }
        iconNameLeft="search"
      />
    </View>
  );
};

const ScrollableCompaniesScreen = () => {
  const {
    isLoading,
    data,
    error,
    send: fetchMoreCompanies,
  } = useRequest(companiesApi.getCompanyPage(1), true, { field: "companies" });
  const [isRefreshing, setIsRefreshing] = useState(false);
  {
    /*-----------------------------------ANIMATION--------------------------------------- */
  }

  const refList = useRef(null);
  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2) + 20],
  });

  const translateYNumber = useRef();

  translateY.addListener(({ value }) => {
    translateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current },
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const handleSnap = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (refList.current) {
        refList.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
            -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };

  if (error) {
    return (
      <Background>
        <Text
          style={{
            fontSize: 22,
            textTransform: "capitalize",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Oops,
        </Text>
        <Text
          style={{
            maxWidth: 300,
            fontSize: 16,
            marginBottom: 20,
            textTransform: "capitalize",
            // fontFamily: "",
            color: theme.colors.subtext,
            textAlign: "center",
          }}
        >
          it seems that our app took a coffee break ☕️, please try again later.
        </Text>
        <AppButton
          title="Try again"
          // onPress={refresh}
          additionalstyle={{ width: 150, paddingVertical: 15 }}
          color={theme.colors.primary}
        />
      </Background>
    );
  }

  if (isLoading && !data) {
    return (
      <Background>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Background>
    );
  }
  return (
    <>
      <View
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          backgroundColor: theme.colors.bg,
          paddingBotoom: 100,
        }}
      >
        <StatusBar backgroundColor={theme.colors.bg} barStyle="dark-content" />
        <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
          <Header />
        </Animated.View>
        {/* <MatchedComapniesList /> */}
        {data && (
          <Animated.FlatList
            scrollEventThrottle={16}
            contentContainerStyle={{
              paddingTop: 170,
              paddingBottom: 100,
              gap: 10,
            }}
            onScroll={handleScroll}
            onMomentumScrollEnd={handleSnap}
            ref={refList}
            // ListHeaderComponent={}
            // onRefresh={fetchMoreCompanies(companiesApi.getCompanyPage(3))}
            refreshing={isRefreshing}
            data={data.companies}
            onEndReached={() =>
              data.isNextPage &&
              fetchMoreCompanies(companiesApi.getCompanyPage(data.page + 1))
            }
            onEndReachedThreshold={0.5}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={(item, idx) => {
              return <CompanyCardOverview taille={320} company={item.item} />;
            }}
          />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
export default ScrollableCompaniesScreen;
