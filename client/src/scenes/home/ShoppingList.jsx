import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import Items from "../../component/Items";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, SetValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  console.log("items", items);

  const handleChange = (Event, newValue) => {
    SetValue(newValue);
  };

 async function getItems() {
   const items = await fetch("http://localhost:1337/api/items?populate=image", {
     method: "GET",
   });
   const itemsJson = await items.json();
   dispatch(setItems(itemsJson.data));
 }

  useEffect(() => {
    getItems();
  }, []);
  return <div>shopping List</div>;
};

export default ShoppingList;
