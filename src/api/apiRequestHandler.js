import { api } from "../config";

const apiRequestHandler = async (options) => {
  try {
    const { data, status, headers } = await api.request(options);
    return [{ data, status, headers }, null];
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

export default apiRequestHandler;
