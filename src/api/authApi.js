import apiRequestHandler from "./apiRequestHandler";

const BASE_URL = "/auth";

export default {
  login: async (email, password) => {
    return apiRequestHandler({
      url: BASE_URL + "/login",
      method: "post",
      data: { email, password },
    });
  },
};
