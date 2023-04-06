import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function ProductCard(props) {
  const { id, name, retailer_name, brand, price, sizes, image } = props;

  const spacedSizes = sizes.replaceAll(",", ", ");

  return (
    <Card
      raised
      sx={{
        maxWidth: 280,
        margin: "0 auto",
        padding: "0.1em",
        marginTop:"15px",
        maxHeight: 600
      }}
    >
      <Link to={`/product/id/${id}`}>
        <CardMedia
          component="img"
          height="275"
          image={image}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {brand}
        </Typography>
        <Divider></Divider>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {retailer_name}
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In Stock Sizes: {spacedSizes}
        </Typography>
      </CardContent>
    </Card>
  );
}
