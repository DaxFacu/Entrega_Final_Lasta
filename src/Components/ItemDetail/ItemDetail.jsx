import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetailContainer.module.css";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div>
      {productSelected.title ? (
        <div className={styles.divBox}>
          <img
            className={styles.itemBox}
            src={productSelected.img}
            alt={productSelected.alt}
          />
          <div className={styles.riBox}>
            <h2 className={styles.textBox}>{productSelected.title}</h2>
            <div>
              <p>{productSelected.description}</p>
            </div>
            <div>
              <p>Precio: ${productSelected.price}</p>
            </div>
            <div>
              <p>Stock : {productSelected.stock}</p>
            </div>
            {productSelected.stock > 0 ? (
              <div>
                <ItemCount
                  stock={productSelected.stock}
                  onAdd={onAdd}
                  initial={quantity}
                />
              </div>
            ) : (
              <div>
                <h2>Fuera de Stock</h2>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h2>Producto no disponible</h2>
          <img src="/undraw_No_data.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
