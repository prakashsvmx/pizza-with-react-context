import React from "react";

const PizzaCartContext = React.createContext({
  adultCount: 1,
  childrenCount: 2,
  setAdultCount: () => {}
});
export default PizzaCartContext;
