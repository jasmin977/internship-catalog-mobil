import apiRequestHandler from "./apiRequestHandler";

const BASE_URL = "user-service/1.0.0/auth";

export default {
  login: async (email, password) => {
    return apiRequestHandler({
      url: BASE_URL + "/login",
      method: "post",
      data: { email, password },
    });
  },
};
