import React from "react";
import PropTypes from "prop-types";

const IncrementButton = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick} data-test="btn-increment">
      <span className="icon is-small">
        <i className="fas fa-plus-circle"></i>
      </span>
    </button>
  );
};
IncrementButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default IncrementButton;
