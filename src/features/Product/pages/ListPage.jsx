import { Box, Container, Pagination, Paper, makeStyles } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import productApi from "../../../api/ProductsApi";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import ProductFilter from "../components/ProductFilter";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

ListPage.propTypes = {};

function ListPage(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(() => ({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 9,
    _sort: queryParams._sort || "salePrice:ASC",
  }));
  const [pagination, setPagination] = useState({
    limit: 10,
    total: 10,
    page: 1,
  });

  useEffect(() => {
    navigate({
      pathname: navigate.pathname,
      search: queryString.stringify(filter),
    });
  }, [navigate, filter]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filter);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Fetch data fail", error);
      }
      setLoading(false);
    })();
  }, [filter]);

  const handleOnChange = (event, page) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      _sort: newSortValue,
    }));
  };

  const handleFilterChange = (newFilter) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...newFilter,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item sx={{ width: "250px" }}>
            <Paper elevation={0}>
              <ProductFilter filter={filter} onChange={handleFilterChange} />
            </Paper>
          </Grid>
          <Grid item sx={{ flex: "1 1 0" }}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={filter._sort}
                onchange={handleSortChange}
              />
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}
              <Box
                sx={{
                  display: "flex",
                  flexFlow: "nowrap",
                  justifyContent: "center",
                  mt: "20px",
                  pb: "10px",
                }}
              >
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handleOnChange}
                  sx={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    justifyContent: "center",
                    padding: "30px 0 20px",
                  }}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
