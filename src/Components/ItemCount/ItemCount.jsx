import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  let [contador, SetContador] = useState(initial);
  const sumar = () => {
    if (stock > contador) {
      SetContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      SetContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>{contador}</h2>
      <Stack spacing={2} direction="row">
        <Button onClick={sumar} variant="contained" size="small">
          +
        </Button>
        <Button onClick={restar} variant="contained" size="small">
          -
        </Button>
        <Button onClick={() => onAdd(contador)} variant="outlined" size="small">
          Agregar
        </Button>
      </Stack>
    </div>
  );
};

export default ItemCount;
