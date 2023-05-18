import React from "react";
import PropTypes from "prop-types";

import formatPrice from "../../../utils/common";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddToCartForm from "./AddToCartForm";

ProductDetail.propTypes = {
  product: PropTypes.object,
};

function ProductDetail({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;
  return (
    <Box
      sx={{
        paddingBottom: "12px",
        borderBottom: "1px solid grey",
      }}
    >
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" sx={{ margin: "16px" }}>
        {shortDescription}
      </Typography>
      <Box
        sx={{
          backgroundColor: "grey",
          padding: "16px",
        }}
      >
        <Box
          component="span"
          sx={{
            fontSize: "h4",
            marginRight: "24px",
            fontWeight: "bold",
          }}
        >
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box
              component="span"
              sx={{
                marginRight: "16px",
                textDecoration: "line-through",
              }}
            >
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span">{`-${promotionPercent}%`}</Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductDetail;
