import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';


export default function ProductCard(props) {
 
  const 
  { id,
    name,
    retailer,
    url,
    brand, 
    price,
    size, 
    image 
  } = props

  return (
    
    <Card raised
    sx={{
      maxWidth: 280,
      margin: "0 auto",
      padding: "0.1em",
    }}>
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
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        {/* <Typography variant="body2" color="primary" component={Link} to={url} target="_blank" underline="none">
          {retailer}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          {retailer}
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In Stock Sizes:    {size}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    
  );
}