import Button from "@mui/material/Button";
import EditReviewModal from "./EditReviewModal";
import { useState } from "react";

export default function EditProductReview(props) {

  const { 
    id,
    product_id,
    reviewer_name,
    summary,
    review,
    rating
  } = props
  
  const [open, setOpen] = useState(false);
  
  // Review modal dialog open
  const handleOpen = () => {
    setOpen(true);
  };

  // Review modal dialog close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className="button"
        variant="contained"
        sx={{ marginTop: "10px", width: "90px" }}
        onClick={handleOpen}
        target="_blank"
      >
        Edit Review
      </Button>
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
  );
}