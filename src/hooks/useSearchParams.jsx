import { useState, useEffect } from "react";

const useSearchParams = (initialFilters) => {
  const [queryFilter, setQueryFilter] = useState(initialFilters);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const newQueryParams = {};

    urlSearchParams.forEach((value, key) => {
      newQueryParams[key] = value;
    });

    setQueryFilter(newQueryParams);
  }, []);

  const updateQueryFilter = (key, value) => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    if (value === null || value === undefined) {
      urlSearchParams.delete(key);
    } else {
      urlSearchParams.set(key, value);
    }

    const newSearchParamsString = urlSearchParams.toString();
    const newUrl = `${window.location.pathname}?${newSearchParamsString}`;
    // update search params
    window.history.replaceState({}, "", newUrl);
    setQueryFilter((prevParams) => {
      // Ensure the return type matches the state type
      const updatedParams = { ...prevParams };
      updatedParams[key] = value; // Type assertion
      return updatedParams;
    });
  };

  return [queryFilter, updateQueryFilter];
};

export default useSearchParams;
