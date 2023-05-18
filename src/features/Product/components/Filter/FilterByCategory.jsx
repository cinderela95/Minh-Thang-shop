import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import categoryApi from "../../../../api/CategoryApi";
import { Typography } from "@mui/material";
import { Box, spacing } from "@mui/system";
import { dark } from "@mui/material/styles/createPalette";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        //handle error
      }
    })();
  }, []);

  const handleByCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box sx={{ padding: "2px" }} textAlign="left">
      <Typography variant="subtitle2" margin="10px">
        DANH MỤC SẢN PHẨM
      </Typography>
      <Box
        component="ul"
        sx={{
          padding: "0",
          margin: "10px",
          "& > li": {
            marginTop: "1px",
            listStyle: "none",
            transition: "all .25s",
            "&:hover": {
              color: "red",
              cursor: "pointer",
            },
          },
        }}
      >
        {categoryList.map((category) => (
          <li
            key={category.id}
            onClick={() => {
              handleByCategoryClick(category);
            }}
          >
            <Typography>{category.name}</Typography>
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default FilterByCategory;
