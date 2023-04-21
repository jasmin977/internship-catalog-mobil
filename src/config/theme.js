import Regular from "../../assets/fonts/Nunito/Nunito-Regular.ttf";
import SemiBold from "../../assets/fonts/Nunito/Nunito-SemiBold.ttf";
import boldLato from "../../assets/fonts/Lato/Lato-Bold.ttf";
import regularLato from "../../assets/fonts/Lato/Lato-Regular.ttf";
import regularPoppin from "../../assets/fonts/Poppins/Poppins-Regular.ttf";
import lightPoppin from "../../assets/fonts/Poppins/Poppins-Light.ttf";
import medPoppin from "../../assets/fonts/Poppins/Poppins-Medium.ttf";

const theme = {
  colors: {
    text: "#1E1E2D",
    subtext: "#7F7F7F",
    primary: "#2A6AFD",
    input: "#F6F8FC",
    bg: "#fff",
    error: "#f13a59",
  },
  fonts: {
    "MyFont-Regular": Regular,
    "MyFont-SemiBold": SemiBold,
    title: boldLato,
    subTitle: regularLato,
    importantText: medPoppin,
    text: regularPoppin,
    hint: lightPoppin,
    //add more fonts here
  },
};

export default theme;
