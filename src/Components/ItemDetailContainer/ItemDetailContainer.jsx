import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState({});
  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);
  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Item agregado al carrito",
      showConfirmButton: false,
      timer: 1000,
    });
    agregarAlCarrito(producto);
  };

  let quantity = getQuantityById(Number(id));

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      quantity={quantity}
    />
  );
};

export default ItemDetailContainer;
