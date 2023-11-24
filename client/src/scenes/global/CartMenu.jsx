import React from "react";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import { shades } from "../../Theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);
  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          <FlexBox mb="15px">
            <Typography variant="h3"> MY CART ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          <Box>
            {cart.map((item) => {
              <Box key={`${item.attributes.name}-${item.id}`}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width="123px"
                      height="164px"
                      src={`http://localhost:2000${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    />
                  </Box>

                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {item.attributes.name}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>

                    <Typography>{item.attributes.shortDescription}</Typography>
                    <FlexBox m="15px 0 ">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        />
                        <RemoveIcon />
                        <Typography>{item.count}</Typography>

                        <IconButton
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        />
                        <AddIcon />
                      </Box>
                    </FlexBox>
                  </Box>
                  <Typography fontWeight="bold">
                    {" "}
                    N{item.attributes.price}
                  </Typography>
                </FlexBox>
              </Box>;
            })}
          </Box>

          <Box m="20px 0">
            <FlexBox>
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">N{totalPrice}</Typography>
            </FlexBox>
            <Button sx={{ 
              "&:hover ": {cursor:"pointer", color: 'black'},
              backgroundColor: shades.primary[400],
              color:  'white' ,
              
              borderRadius: "5",
              minWidth:'100%',
              padding: "20px 40px",
              m: "20px 0"
            }}
            onClick={() =>{
              navigate("/checkout")
              dispatch(setIsCartOpen({}))
            }}
            >Check out</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
