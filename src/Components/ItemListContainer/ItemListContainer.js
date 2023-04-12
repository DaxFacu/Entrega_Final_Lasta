import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");
    let consulta = undefined;

    if (id) {
      const q = query(itemsCollection, where("category", "==", id));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [id]);
  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <h1>
          <PulseLoader color="#36d7b7" />
        </h1>
      )}
    </div>
  );
};

export default ItemListContainer;
