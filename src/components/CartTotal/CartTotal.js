import React from "react";
import PropTypes from "prop-types";
import { OrderConfig } from "constants/Constants";

const CartTotal = ({ value }) => {
  return (
    <div className="columns is-mobile cart-total" data-test="cart-total">
      <div className="column"></div>
      {value >= OrderConfig.MIN_ORDER_VALUE && value <= OrderConfig.MAX_ORDER_VALUE ? (
        <div className="column message is-primary" data-test="cart-total-valid">
          Total : {value}
        </div>
      ) : (
        <div className="column message is-danger" data-test="cart-total-invalid">
          Error:{" "}
          {value < OrderConfig.MIN_ORDER_VALUE &&
            `Minimum Order is :${OrderConfig.MIN_ORDER_VALUE}:: Total: ${value}`}
          {value > OrderConfig.MAX_ORDER_VALUE &&
            `Maximum Order is :${OrderConfig.MAX_ORDER_VALUE}:: Total: ${value}`}
        </div>
      )}
    </div>
  );
};
CartTotal.propTypes = {
  value: PropTypes.number
};

export default CartTotal;
