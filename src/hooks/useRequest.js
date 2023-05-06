import { useState, useEffect } from "react";
import { apiRequestHandler } from "../api";
import { useContext } from "react";
import { AuthContext } from "../context";

const useRequest = (option) => {
  const { removeUserCredential, userToken } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [headers, setheaders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("fetch");
    if (userToken)
      option.headers = {
        ...option.headers,
        Authorization: `barear ${userToken}`,
      };
    const [res, error] = await apiRequestHandler(option);
    if (error) {
      setError(error.message);
      console.log(error.message);
    } else {
      const { data, status, headers } = res;
      if ([401, 403].includes(status)) removeUserCredential();
      if (!data.success) setError(data.message);
      else setData(data);
      setheaders(headers);
    }
    setIsLoading(false);
    console.log("fetch done");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => fetchData();

  return { data, isLoading, headers, error, refresh };
};

export default useRequest;
