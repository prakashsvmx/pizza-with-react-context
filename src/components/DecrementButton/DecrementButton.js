import React from "react";
import PropTypes from "prop-types";

const DecrementButton = ({ onClick, isDisabled }) => {
  return (
    <button className="button" onClick={onClick} disabled={isDisabled} data-test="btn-decrement">
      <span className="icon is-small">
        <i className="fas fa-minus-circle"></i>
      </span>
    </button>
  );
};
DecrementButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

export default DecrementButton;
