import Button from "@mui/material/Button";
import EditReviewModal from "./EditReviewModal";
import { useState } from "react";

export default function EditProductReview(props) {
  const { id, product_id, reviewer_name, summary, review, rating } = props;

  const [open, setOpen] = useState(false);

  // Button component that allows user to edit a review, controls a popup review window
  
  // Review modal dialog open
  const handleOpen = () => {
    setOpen(true)
  }

  // Review modal dialog close
  const handleClose = () => {
    setOpen(false)
    window.location.reload()
  }

  return (
    <>
      <Button
        className="button"
        variant="contained"
        sx={{ marginTop: "10px", width: "130px" }}
        onClick={handleOpen}
        target="_blank"
      >
        Edit Review
      </Button>
      {/* Call the popup review form */}
      <EditReviewModal
        open={open}
        handleClose={handleClose}
        id={id}
        product_id={product_id}
        reviewer_name={reviewer_name}
        summary={summary}
        review={review}
        rating={rating}
      ></EditReviewModal>
    </>
  )
}
