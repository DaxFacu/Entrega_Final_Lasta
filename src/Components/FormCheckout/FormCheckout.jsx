import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import styles from "./FormCheckout.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    emailConfirm: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total: getTotalPrice(),
      Date: new Date().toLocaleString(),
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));
    cart.map((products) => {
      let refdoc = doc(db, "products", products.id);
      updateDoc(refdoc, { stock: products.stock - products.quantity });
      return products;
    });
  };

  const verif = () => {
    return (
      userData.name &&
      userData.lastName &&
      userData.email &&
      userData.emailConfirm &&
      userData.phone &&
      userData.email === userData.emailConfirm
    );
  };
  return (
    <div className={styles.divForm}>
      <h1>Formulario de finalización de compra</h1>
      <form onSubmit={handleSubmit} className={styles.formForm}>
        <TextField
          margin="dense"
          className={styles.inputForm}
          required
          id="outlined-required"
          label="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <TextField
          margin="dense"
          className={styles.inputForm}
          required
          id="outlined-required"
          label="Apellido"
          value={userData.lastName}
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
        />
        <TextField
          margin="dense"
          className={styles.inputForm}
          required
          id="outlined-required"
          label="Email"
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <TextField
          margin="dense"
          className={styles.inputForm}
          required
          id="outlined-required"
          label=" Repetir Email"
          type="email"
          value={userData.emailConfirm}
          onChange={(e) =>
            setUserData({ ...userData, emailConfirm: e.target.value })
          }
        />
        <TextField
          margin="dense"
          className={styles.inputForm}
          required
          id="outlined-required"
          label="Teléfono"
          type="tel"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <Button
          disabled={!verif() ? true : false}
          className={styles.buttonForm}
          variant="outlined"
          type="submit"
        >
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default FormCheckout;
