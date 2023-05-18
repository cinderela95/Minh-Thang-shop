import { Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

function Product({ product }) {
  const navigate = useNavigate();
  const thumbnailUrl = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail?.url}`
    : "https://via.placeholder.com/444";

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <Box padding={1} textAlign={"left"} onClick={handleClick}>
      <Box padding={1} height="200px" width="200px">
        <img src={thumbnailUrl} alt={product.name} width="100%"></img>
      </Box>
      <Typography variant="body2" fontSize="18px">
        {product.name}
      </Typography>
      <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
        Price:{" "}
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.salePrice)}
      </Box>
    </Box>
  );
}

export default Product;
