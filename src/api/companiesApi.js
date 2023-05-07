import apiRequestHandler from "./apiRequestHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "company-service/1.0.0";

export default {
  getCompanybyId: (companyId) => {
    return {
      url: BASE_URL + `/company/${companyId}`,
      method: "get",
      headers: {
        Authorization: `barear`,
      },
    };
  },
  getCompanyPage: (page, limit = 10) => {
    return {
      url: BASE_URL + `/company?page=${page}&limit=${limit}`,
      method: "get",
      headers: {
        Authorization: `barear`,
      },
    };
  },
  likeCompany: (companyId) => {
    return {
      url: BASE_URL + `/company/like/${companyId}`,
      method: "post",
      headers: {
        Authorization: `barear`,
      },
    };
  },

  saveCompany: (companyId) => {
    return {
      url: BASE_URL + `/company/save/${companyId}`,
      method: "post",
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

  getCompanyReviews: (companyId, page = 1, limit = 10) => {
    return {
      url: BASE_URL + `/review/company/${companyId}?page=${page}&limit=${limit}`,
      method: "get",
      headers: {
        Authorization: `barear`,
      },
    };
  },
  reviewCompany: () => {
    return {
      url: BASE_URL + `/review`,
      method: "post",
      headers: {
        Authorization: `barear`,
      },
    };
  },
};
