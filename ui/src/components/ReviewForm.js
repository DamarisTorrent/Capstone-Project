import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { saveReview } from "../utility/api";

const ReviewForm = (props) => {
  const { id } = useParams();

  const {
    handleClose,
    data
  } = props 

  const [name, setName] = useState(data?.name);
  const [summary, setSummary] = useState(data?.summary);
  const [review, setReview] = useState(data?.review);
  const [rating, setRating] = useState(data?.rating);

  const reviewData = {
    reviewer_name: name,
    summary: summary,
    review: review,
    rating: rating,
    product_id: id,
  };

  const handleSubmit = async () => {
    try {
      await saveReview(reviewData)

      handleClose()
      alert('Thank you for the review')
    
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Fragment>
      <Grid container direction="row" justifyContent="center">
        <Card
          className="form-container"
          width={500}
          sx={{
            borderRadius: "20px",
            boxShadow: "3px 2px 7px rgb(0, 0, 0, 0.5)",
          }}
        >
          <CardContent sx={{ display: "grid", margin: "20px" }}>
            <Grid container direction="column" justify="center" width={400}>
              <TextField
                label="Name"
                sx={{ marginBottom: "15px", marginTop: "10px" }}
                required
                onChange={(name) => setName(name.target.value)}
                value={name}
                helperText="Please enter your name or nickname."
              />

              <TextField
                id="summary"
                label="Summary"
                sx={{ marginBottom: "5px" }}
                required
                onChange={(summary) => setSummary(summary.target.value)}
                value={summary}
                helperText="Please provide a short summary."
              />

              <TextField
                id="review"
                label="Review"
                multiline
                required
                rows={5}
                onChange={(review) => setReview(review.target.value)}
                value={review}
                helperText="Please tell us what you think about this product."
              />

              <br></br>
              <Rating
                name="rating"
                value={rating}
                label=""
                required
                onChange={(event, rating) => {
                  setRating(rating);
                }}
              />
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid container direction="row" justify-content="center">
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{ margin: "15px", width: "150px" }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ margin: "15px", width: "150px" }}
        >
          Submit
        </Button>
      </Grid>
    </Fragment>
  );
};

export default ReviewForm;
