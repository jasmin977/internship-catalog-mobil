import { api } from "../config";

const BASE_URL = "/user";

const apiRequestHandler = async (options) => {
  try {
    const { data, status } = await api.request(options);
    return [{ data, status }, null];
  } catch (error) {
    if (error.response) {
      return [
        {
          status: error.response.status,
          data: error.response.data,
        },
        null,
      ];
    } else {
      return [{}, error];
    }
  }
};

// try {
//   const { data } = await axios.post(
//     "http://192.168.1.17:5000/api/v1/user/verify_email",
//     {
//       email,
//       code: code.join(""),
//     }
//   );
//   if (data.success) {
//     navigation.replace("CreatePassScreen", { email });
//   }
// } catch (err) {
//   console.log(err?.response?.data);
// }

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
