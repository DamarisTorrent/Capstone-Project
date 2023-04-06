import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import { updateReview, deleteReview } from "../utility/api";

const EditReviewForm = (props) => {
  const {
    id,
    product_id,
    reviewer_name,
    summary,
    review,
    rating,
    open,
    handleClose,
  } = props;

  const [newName, setNewName] = useState();
  const [newSummary, setNewSummary] = useState();
  const [newReview, setNewReview] = useState();
  const [newRating, setNewRating] = useState();

  const reviewData = {};
  reviewData.id = id;

  const handleSubmit = (e) => {
    e.preventDefault();

    //If any of the fields have been changed, populate the reviewData object with the new values,
    //otherwise populate it with the old values
    if (newName === undefined) {
      reviewData.reviewer_name = reviewer_name;
    } else {
      reviewData.reviewer_name = newName;
    }

    if (newSummary === undefined) {
      reviewData.summary = summary;
    } else {
      reviewData.summary = newSummary;
    }

    if (newReview === undefined) {
      reviewData.review = review;
    } else {
      reviewData.review = newReview;
    }

    if (newRating === undefined) {
      reviewData.rating = rating;
    } else {
      reviewData.rating = newRating;
    }
    // console.log(reviewData.reviewer_name, reviewData.summary, reviewData.review , reviewData.rating)

    updateReview(reviewData);
    handleClose();
  };

  const handleDelete = (e) => {
    deleteReview(reviewData.id);
    handleClose();
  };

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
                onChange={(reviewer_name) =>
                  setNewName(reviewer_name.target.value)
                }
                defaultValue={reviewer_name}
                helperText="Change your name."
              />

              <TextField
                id="summary"
                label="Summary"
                sx={{ marginBottom: "5px" }}
                required
                onChange={(summary) => setNewSummary(summary.target.value)}
                defaultValue={summary}
                helperText="Change your summary."
              />

              <TextField
                id="review"
                label="Review"
                multiline
                required
                rows={5}
                onChange={(review) => setNewReview(review.target.value)}
                defaultValue={review}
                helperText="Change your review"
              />

              <br></br>
              <Rating
                name="rating"
                defaultValue={rating}
                label=""
                required
                onChange={(event, rating) => {
                  setNewRating(rating);
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
          Save Review
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleDelete}
          sx={{ margin: "15px", width: "150px" }}
        >
          Delete Review
        </Button>
      </Grid>
    </Fragment>
  );
};

export default EditReviewForm;
