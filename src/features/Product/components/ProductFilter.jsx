import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./Filter/FilterByCategory";
import FilterByPrice from "./Filter/FilterByPrice";
import { Box } from "@mui/system";
import FilterByService from "./Filter/FilterByService";

ProductFilter.propTypes = {
  filter: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilter({ filter, onChange }) {
  const handleCategoryChange = (newCategory) => {
    if (!onChange) return;
    const newFilter = {
      ...filter,
      "category.id": newCategory,
    };

    onChange(newFilter);
  };

  const handlePriceChance = (values) => {
    if (onChange) onChange(values);
  };

  const handleServiceChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChance} />
      <FilterByService filter={filter} onChange={handleServiceChange} />
    </Box>
  );
}

export default ProductFilter;
