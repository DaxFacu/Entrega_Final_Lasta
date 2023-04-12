import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <div key={element.id}>
      <Link to={`/item/${element.id}`}>
        <Card sx={{ maxWidth: 345, height: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="136"
              image={element.img}
              alt={element.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {element.title}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {element.description}
              </Typography> */}
              <Typography
                textAlign="center"
                variant="body3"
                component="div"
                fontSize="1.4rem"
                color="blue"
              >
                ${element.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={{
                margin: "auto",
              }}
            >
              Ver detalles
            </Button>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
};

export default Item;
