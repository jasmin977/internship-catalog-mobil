import { useState, useEffect } from "react";
import { apiRequestHandler } from "../api";
import { useContext } from "react";
import { AuthContext } from "../context";

const useRequest = (initOption, sendOnLoad = true) => {
  const { removeUserCredential, userToken } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [headers, setheaders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [option, setOption] = useState(initOption)


  const fetchData = async (data) => {
    setIsLoading(true);

    console.log("useRequest: ", option.url);
    if (userToken)
      option.headers = {
        ...option.headers,
        Authorization: `barear ${userToken}`,
      };
    const [res, error] = await apiRequestHandler({ ...option, data });
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
    if (sendOnLoad) fetchData();
  }, [option]);

  const send = (data) => fetchData(data);

  return { data, isLoading, headers, error, send, setOption };
};

export default useRequest;
