import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

FilterByService.propTypes = {
  filter: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filter = {}, onChange }) {
  const handleOnChange = (event) => {
    if (!onChange) return;
    const { name, checked } = event.target;
    onChange({ [name]: checked });
  };
  return (
    <Box borderTop="8px" padding="8px">
      <Typography>Khoảng Giá</Typography>
      <Box
        component="ul"
        sx={{
          padding: "5px",
          margin: "5px",
          "& > li": {
            marginTop: "1px",
            listStyle: "none",
            transition: "all .25s",
          },
        }}
      >
        {[
          { value: "isPromotion", label: "Dang khuyen mai" },
          { value: "isFreeShip", label: "Mien phi van chuyen" },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filter[service.value])}
                  onChange={handleOnChange}
                  color="primary"
                  name={service.value}
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default FilterByService;
