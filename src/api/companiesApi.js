import apiRequestHandler from "./apiRequestHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "company-service/1.0.0";

export default {
  getCompanyPage: (page, limit = 10) => {
    return {
      url: BASE_URL + `/company?page=${page}&limit=${limit}`,
      method: "get",
      headers: {
        Authorization: `barear`,
      },
    };
  },
  companyAutoComplete: async (query, limit = 10) => {
    const token = JSON.parse(await AsyncStorage.getItem("userToken"));
    return apiRequestHandler({
      url: BASE_URL + `/company/q/${query}?limit=${limit}`,
      method: "get",
      headers: {
        Authorization: `barear ${token}`,
      },
    });
  },
};
