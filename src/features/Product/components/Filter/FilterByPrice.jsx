import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box borderTop="8px" padding="8px">
      <Typography>Khoảng Giá</Typography>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          marginBottom: "8px",
          marginTop: "8px",
          padding: "8px",
          "& > span": {
            marginRight: "8px",
            marginLeft: "8px",
          },
        }}
      >
        <TextField
          size="small"
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        ></TextField>
        <span>-</span>
        <TextField
          size="small"
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        ></TextField>
      </Box>

      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
