import React from "react";
import Item from "../Item/Item.js";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        paddingTop: "2%",
        backgroundColor: "back",
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        alligItems: "center",
        flexWrap: "wrap",
      }}
    >
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
