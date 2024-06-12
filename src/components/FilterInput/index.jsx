import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function FilterInput(props) {
  const {} = props;

  return (
    <div>
      <div className="bold">Filter By Title / Order ID</div>
      <input placeholder="Start typing to search" />
    </div>
  );
}

FilterInput.propTypes = {};

export default FilterInput;
