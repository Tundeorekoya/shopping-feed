import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Tabs, Tab, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../Theme";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../component/Item";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const Item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await item.Json()
    setItem(itemJson.data)
  }
    async function getItems() {
      const items = await fetch(
        "http://localhost:1337/api/items?populate=image",
        {
          method: "GET",
        }
      );
      const itemsJson = await items.json();
      setItems(itemsJson.data);
    }

  return <div></div>;
};

export default ItemDetails;
