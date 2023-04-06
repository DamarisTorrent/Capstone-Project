import { useParams } from "react-router-dom";
import { getReviews } from "../utility/api";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Fragment } from "react";
import FormGroup from "@mui/material/FormGroup";
import EditProductReview from "./EditProductReview";

export default function ReviewsContainer() {
  const [data, setData] = useState();

  const { id } = useParams();

  useEffect(() => {
    getReviews(id)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  console.log("data in the reviews container", data);

  if (!data) {
    return <>Loading Reviews...</>;
  }

  return (
    <Fragment>
      <Box>
        {data.map((element) => {
          return (
            <Card
              raised
              sx={{
                maxWidth: 400,
                margin: "0 auto",
                marginTop:"15px",
                
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" value={element.summary}>
                  {element.summary}
                </Typography>
                <Rating name="read-only" value={element.rating} readOnly />
                <Divider></Divider>
                <br></br>
                <Typography variant="body1" color="text.secondary" value={element.review}>
                  {element.review}
                </Typography>
                <br></br>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Review by:
                  </Typography>
                  <Typography variant="body2" value={element.reviewer_name}>
                    {element.reviewer_name}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <br></br>
                  <EditProductReview
                    id={element.id}
                    product_id={element.product_id}
                    reviewer_name={element.reviewer_name}
                    summary={element.summary}
                    review={element.review}
                    rating={element.rating}
                  ></EditProductReview>
                </Box>
                <br></br>
                <FormGroup></FormGroup>
              </CardContent>
            </Card>
          )
        })}
      </Box>
    </Fragment>
  );
}
