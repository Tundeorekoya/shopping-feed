import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../Theme";
import { setIsCartOpen } from "../../state";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart)

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      height="60px"
      background="rgba(255,255,255,0.95)"
      position="fixed"
      top="0"
      left="1"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "Pointer" } }}
          color={shades.secondary[500]}
        >
          SHOPPING FEED
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>

          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>

          <Badge 
          badgeContent={cart.length}
          color="secondary"
          invisible={cart.length === 0 }
          sx={{"&.muiBadge-badge":{
            right:5,
            top:5,
            padding:"0, 4px",
            height:"14px",
            minWidth:"13px"
          }
           }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>

          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
