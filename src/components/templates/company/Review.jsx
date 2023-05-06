import { View, Text } from "react-native";
import React from "react";

import { RateOption } from "../../atoms/company";
import { ReviewCard } from "../../molecules/company";
import { theme } from "../../../config";

const reviews = [
  {
    postedByPhot:
      "https://orlandosolution.com/wp-content/uploads/2020/03/originaal.jpg",
    postedByName: "Amira bouhlel",
    rate: 4,
    postedAt: "2020-01-01 10:10:10",
    reviewDescription:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès",
  },
  {
    postedByPhot:
      "https://orlandosolution.com/wp-content/uploads/2020/03/originaal.jpg",
    postedByName: "Amira bouhlel",
    rate: 4,
    postedAt: "2020-01-01 10:10:10",
    reviewDescription:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès",
  },
  {
    postedByPhot:
      "https://orlandosolution.com/wp-content/uploads/2020/03/originaal.jpg",
    postedByName: "Amira bouhlel",
    rate: 4,
    postedAt: "2020-01-01 10:10:10",
    reviewDescription:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès",
  },
  {
    postedByPhot:
      "https://orlandosolution.com/wp-content/uploads/2020/03/originaal.jpg",
    postedByName: "Amira bouhlel",
    rate: 4,
    postedAt: "2020-01-01 10:10:10",
    reviewDescription:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès",
  },
];
const Review = ({ rating, setRating }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <View style={{ paddingHorizontal: 10 }}>
        <Text
          style={{
            fontFamily: "title",
            fontSize: 22,
            color: theme.colors.text,
          }}
        >
          Rate this company
        </Text>
        <Text
          style={{
            fontFamily: "text",
            fontSize: 13,
            color: theme.colors.text,
          }}
        >
          Tell others what you think
        </Text>
        <RateOption rating={rating} setRating={setRating} />
      </View>
      <View
        style={{
          gap: 5,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontFamily: "title",

            fontSize: 22,
            color: theme.colors.text,
          }}
        >
          Reviews
        </Text>
        <Text
          style={{
            fontFamily: "text",
            fontSize: 16,
            color: theme.colors.text,
          }}
        >
          ({reviews.length})
        </Text>
      </View>

      {reviews.map((review, idx) => {
        return <ReviewCard key={`review_crad_${idx}`} review={review} />;
      })}
    </View>
  );
};

export default Review;
