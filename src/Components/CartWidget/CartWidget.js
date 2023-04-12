import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();
  return (
    <div className="container-cart">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Link to="/cart">
          <ShoppingCartIcon />
          <div className="bubble-counter">
            <span>{total}</span>
          </div>
        </Link>
      </Box>
    </div>
  );
};

export default CartWidget;
