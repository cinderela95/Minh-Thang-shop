import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onchange: PropTypes.func,
};

function ProductSort({ currentSort, onchange }) {
  const handleSortChange = (e, newValue) => {
    if (onchange) onchange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Tăng dần" value="salePrice:ASC"></Tab>
      <Tab label="Giảm dần" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
