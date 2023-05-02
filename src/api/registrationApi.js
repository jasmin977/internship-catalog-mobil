import apiRequestHandler from "./apiRequestHandler";

const BASE_URL = "user-service/1.0.0";

export default {
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
  createStudentAcount: async (email, password, cpassword) => {
    return apiRequestHandler({
      url: BASE_URL + "/student/create_account",
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
