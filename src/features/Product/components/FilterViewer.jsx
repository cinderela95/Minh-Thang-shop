import React from "react";
import PropTypes from "prop-types";

FilterViewer.propTypes = {
  filter: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filter: {}, onChange = null }) {
  return <div></div>;
}

export default FilterViewer;
