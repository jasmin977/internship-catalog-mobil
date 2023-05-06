import { View, Text, Animated, StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import companiesList from "../../data/output_2023-03-05_020409.json";
import { CompanyCard, CompanyCardOverview } from "../molecules/company";
import { theme } from "../../config";
import { companiesApi } from "../../api";
import { Background, InputWithIcons } from "../atoms";
import { ActivityIndicator } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FeedHeader } from "../molecules";
import MatchedComapniesList from "./MatchedComapniesList";

const getCloser = (value, checkOne, checkTwo) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

const { diffClamp } = Animated;
const headerHeight = 100 * 2;

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.bg,
          paddingTop: 8,
        },
        {
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
  const [isLoading, setIsLoading] = useState(false);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
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
  {
    /*-------------------------------------------------------------------------- */
  }
  const [companies, setcompanies] = useState([]);

  const fetchCompanies = async () => {
    setIsRefreshing(true);
    const [res, err] = await companiesApi.getCompanyPage(1);
    if (err) return console.log(err);
    const { data, status } = res;
    if (status !== 200) {
      setError(data.message);
    } else {
      setcompanies(data.companies);
      setIsRefreshing(false);
      return;
    }

    // TODO: handle errors or empty response
    console.log("handle failed response");
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCompanies().then(() => {
      setIsLoading(false);
    });

    //setcompanies(staticcompanies);
  }, []);

  if (error) {
    return (
      <Background>
        <Text>{error}</Text>
        <Button
          title="Try again"
          onPress={fetchCompanies}
          color={theme.colors.primary}
        />
      </Background>
    );
  }

  if (isLoading) {
    return (
      <Background>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Background>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        backgroundColor: theme.colors.bg,
        paddingBotoom: 100,
      }}
    >
      <StatusBar backgroundColor={theme.colors.bg} barStyle="dark-content" />
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <Header />
      </Animated.View>

      <Animated.FlatList
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: 130,
          paddingBottom: 100,

          gap: 10,
        }}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleSnap}
        ref={refList}
        ListHeaderComponent={<MatchedComapniesList />}
        onRefresh={fetchCompanies}
        refreshing={isRefreshing}
        data={companies}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={(item, idx) => {
          return <CompanyCardOverview taille={320} company={item.item} />;
        }}
      />
    </View>
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
