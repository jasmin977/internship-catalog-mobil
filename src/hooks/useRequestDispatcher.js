import { useState, useEffect } from "react";
import { apiRequestHandler } from "../api";
import { useContext } from "react";
import { AuthContext } from "../context";

const useRequestDispatcher = (option) => {
    const { removeUserCredential, userToken } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [headers, setheaders] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (data) => {
        if (userToken)
            option.headers = {
                ...option.headers,
                Authorization: `barear ${userToken}`,
            };
        const [res, error] = await apiRequestHandler({ ...option, data });
        console.log(error)
        if (!!error) {
            setError(error.message);
            console.log(error.message);
        } else {
            const { data, status, headers } = res;
            if ([401, 403].includes(status)) removeUserCredential();
            if (!data.success) setError(data.message);
            else {
                setData(data);
            }

            setheaders(headers);
        }
        setIsLoading(false);
    };


    return { data, isLoading, headers, error, fetchData };
};

export default useRequestDispatcher;
