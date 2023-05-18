import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import Register from "../../features/Auth/components/Register";
import Login from "../../features/Auth/components/Login";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Badge } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "../../features/Auth/userSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartItemsCountSelector } from "../../features/Cart/selector";
import { useNavigate } from "react-router-dom";

const MODE = {
  register: "register",
  login: "login",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.login);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const cartItemCount = useSelector(cartItemsCountSelector);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
    handleCloseMenu();
  };

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New Shop
          </Typography>
          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}
          <IconButton
            size="large"
            aria-label="show 4 new items"
            color="inherit"
            onClick={handleAddToCart}
          >
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {isLoggedIn && (
            <IconButton onClick={handleClickMenu}>
              <Avatar></Avatar>
            </IconButton>
          )}
        </Toolbar>
        <Dialog
          //onClick={(e) => e.stopPropagation()}
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
        >
          <DialogTitle></DialogTitle>
          <DialogContent>
            {mode === MODE.register && (
              <div>
                <Register closeDialog={handleClose} />
                <Box textAlign="center">
                  {" "}
                  <Button color="primary" onClick={() => setMode(MODE.login)}>
                    Already have an Account. Login here
                  </Button>
                </Box>
              </div>
            )}
            {mode === MODE.login && (
              <div>
                <Login closeDialog={handleClose} />
                <Box textAlign="center">
                  <Button
                    color="primary"
                    onClick={() => setMode(MODE.register)}
                  >
                    Don't have an Account. Register here
                  </Button>
                </Box>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
