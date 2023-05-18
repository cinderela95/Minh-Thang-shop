import { Grid, LinearProgress, Paper, Switch } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import ProductThumnail from "../components/ProductThumnail";
import useProductDetail from "../hooks/useProductDetail";
import ProductDetail from "../components/ProductDetail";
import AddToCartForm from "../components/AddToCartForm";
import ProductMenu from "../components/ProductMenu";
import { addToCart } from "../../Cart/cartSlice";
import { useDispatch } from "react-redux";

DetailPage.propTypes = {};

function DetailPage() {
  const match = useMatch("/products/:id");
  const { id } = match?.params || {};
  const { product, loading } = useProductDetail(id);
  const dispatch = useDispatch();

  const handleAddToCart = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    console.log("action", action);
    dispatch(action);
  };

  if (loading) {
    return (
      <Box>
        <LinearProgress
          sx={{ position: "fixed", top: "0", left: "0", width: "100%" }}
        ></LinearProgress>
      </Box>
    );
  }

  return (
    <Box sx={{ paddingBottom: "300px" }}>
      <Container>
        <Paper elevation={0}>
          <Grid container spacing={0}>
            <Grid
              item
              sx={{ width: "400px", padding: "12px", borderColor: "black" }}
            >
              <ProductThumnail product={product} />
            </Grid>
            <Grid item sx={{ flex: "1 1 0", padding: "12px" }}>
              <ProductDetail product={product} />
              <AddToCartForm onSubmit={handleAddToCart} />
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <ProductMenu product={product} />
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
