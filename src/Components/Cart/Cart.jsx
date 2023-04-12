import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
import "./Cart.css";
import Button from "@mui/material/Button";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "Seguro que deseas eliminar todo el carrito?",
      showCancelButton: true,
      confirmButtonText: "OK",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado", "", "success");
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h2>Gracias por su compra</h2>
        <h4>El comprobante es : {orderId}</h4>
        <Link to="/">Seguir comprando</Link>
      </div>
    );
  }
  const precioTotal = getTotalPrice();
  return (
    <div>
      {!showForm ? (
        <div
          syle={{
            width: "20%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {cart.map((elemento) => {
            return (
              <div key={elemento.id}>
                <div className="container-item-cart">
                  <img
                    className="container-img"
                    src={elemento.img}
                    alt={elemento.alt}
                    style={{ width: "2" }}
                  />

                  <div className="container-center">
                    <h2 className="container-title">{elemento.title}</h2>

                    <h3 className="container-quantity">
                      Cantidad: {elemento.quantity}
                    </h3>
                    <h3 className="container-price">
                      Precio unitario: {elemento.price}
                    </h3>
                    <h3 className="container-price">
                      Precio Total: {elemento.price * elemento.quantity}
                    </h3>
                    <div>
                      {" "}
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        onClick={() => deleteProductById(elemento.id)}
                      >
                        -
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {cart.length > 0 ? (
            <div className="container-button-div">
              <h1>El total del carrito es ${precioTotal}</h1>
              <Button
                className="container-button"
                variant="contained"
                size="small"
                onClick={() => clear()}
              >
                Limpiar carrito
              </Button>
              <Button
                className="container-button"
                color="secondary"
                variant="contained"
                size="small"
                onClick={() => setShowForm(true)}
              >
                Finalizar compra
              </Button>
            </div>
          ) : (
            <div>
              <h1>No hay items en el carrito </h1>{" "}
              <img src="/undraw.png" alt="" />
            </div>
          )}
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
