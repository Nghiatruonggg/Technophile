import { useEffect, useState } from "react";

const useCallAPI = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);

        setIsLoading(false);
        setData(response.data);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    getApi();
  }, []);

  return {data, isLoading};
};

export default useCallAPI;
