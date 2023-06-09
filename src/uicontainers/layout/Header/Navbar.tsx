/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../../../Assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { NavLink, useNavigate } from "react-router-dom";
import useCartOptions from "uicontainers/Products/hooks";
import CartContainer from "uicontainers/CartContainer";

const Navbar = () => {
  const { openCart, handleOpenCart, handleCloseCart } = useCartOptions();
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Products",
      icon: <InfoIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <NavLink to="/"><img src={Logo} alt="" style={{ width: '80px', height: '80px' }} /></NavLink>
      </div>
      <div className="navbar-links-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <a onClick={handleOpenCart}>
          <BsCart2 className="navbar-cart-icon" />
        </a>
        {/* <button className="primary-button">Bookings Now</button> */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      <CartContainer open={openCart} onclose={handleCloseCart} />
    </nav>
  );
};

export default Navbar;
