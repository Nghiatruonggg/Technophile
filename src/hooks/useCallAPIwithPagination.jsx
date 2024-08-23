import React, { useEffect, useState } from "react";

const useCallAPIwithPagination = (url, itemsPerPage = 6) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  let param = `?_page=${currentPage}&_limit=${itemsPerPage}`


  useEffect(() => {
    const getApi = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url + param);

        setIsLoading(false);
        setData(response.data);

        let totalItems = parseInt(response.headers["x-total-count"]);
        setTotalPages(Math.ceil(totalItems / itemsPerPage))

      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    getApi();
  }, [currentPage]);

  return { data, isLoading, totalPages, currentPage, setCurrentPage };
};

export default useCallAPIwithPagination;
