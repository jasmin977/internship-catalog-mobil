import apiRequestHandler from "./apiRequestHandler";

const BASE_URL = "/user";

export default {
  login: async (email, password) => {
    return apiRequestHandler({
      url: BASE_URL + "/login",
      method: "post",
      data: { email, password },
    });
  },

  requestEmailVerification: async (email) => {
    return apiRequestHandler({
      url: BASE_URL + "/request_email_verification",
      method: "post",
      data: { email },
    });
  },
  verifyEmail: async (email, code) => {
    return apiRequestHandler({
      url: BASE_URL + "/verify_email",
      method: "post",
      data: { email, code },
    });
  },
  createAcount: async (email, password, cpassword) => {
    return apiRequestHandler({
      url: BASE_URL + "/create_account",
      method: "post",
      data: { email, password, cpassword },
    });
  },
  userPersonalInfo: async (email, first_name, last_name, major) => {
    return apiRequestHandler({
      url: BASE_URL + "/user_personal_info",
      method: "post",
      data: { email, first_name, last_name, major },
    });
  },
};
