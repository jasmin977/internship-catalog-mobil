import { useState, useEffect } from "react";
import { apiRequestHandler } from "../api";
import { useContext } from "react";
import { AuthContext } from "../context";

const useRequest = (initOption, sendOnLoad = true, concatList = {},) => {
  const { removeUserCredential, userToken } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [headers, setheaders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [option, setOption] = useState(initOption)


  const fetchData = async (body) => {
    setIsLoading(true);
    console.log("useRequest: ", !body ? option.url : body.url);
    if (userToken) {
      option.headers = {
        ...option.headers,
        Authorization: `barear ${userToken}`,
      };
      if (body) body.headers = {
        ...body.headers,
        Authorization: `barear ${userToken}`,
      };
    }
    const [res, error] = await apiRequestHandler({ ...option, ...body });
    if (error) {
      setError(error.message);
      console.log(error.message);
    } else {
      const { data: resData, status, headers } = res;
      if ([401, 403].includes(status)) removeUserCredential();
      if (!resData.success) setError(resData.message);
      else if (!concatList.field || !data) setData(resData);
      else setData(old => ({ ...resData, [concatList.field]: [...old[concatList.field], ...resData[concatList.field]] }))
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
