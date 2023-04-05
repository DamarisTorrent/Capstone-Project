import Dialog from "@mui/material/Dialog";
import EditReviewForm from "./EditReviewForm";

const EditReviewModal = ({ open, handleClose, props }) => {
  

  // const { 
  //   id,
  //   product_id,
  //   reviewer_name,
  //   summary,
  //   review,
  //   rating
  // } = props
  
  return (
    <Dialog open={open} onClose={handleClose}>
      <EditReviewForm 
      handleClose={handleClose} 
      // id={id}
      // product_id={product_id}
      // reviewer_name={reviewer_name}
      // summary={summary}
      // review={review}
      // rating={rating}
      ></EditReviewForm>
    </Dialog>
  );
};

export default EditReviewModal;