import React, { useState } from "react";
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // active user data getting from the api call
  const [activeUserData, setActiveUserData] = useState(null);

  // filters selected data on the main page
  const [filtersSelectedData, setFiltersSelectedData] = useState({});

  const [dropDownValues, setDropDownValues] = useState({});

  // values to pass in the context
  const values = {
    activeUserData,
    setActiveUserData,

    setFiltersSelectedData,
    filtersSelectedData,

    dropDownValues,
    setDropDownValues,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
