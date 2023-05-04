import React from "react";
import { View, Text, TextInput, ScrollView, Animated } from "react-native";

const StickyHeader = ({ children }) => {
  const scrollY = new Animated.Value(0);
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });

  return (
    <View>
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: headerTranslateY }] },
        ]}
      >
        <Text style={styles.userName}>yasmin</Text>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={20}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = {
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  scrollView: {
    marginTop: 100, // Adjust this value based on the height of the sticky header
  },
};

export default StickyHeader;
