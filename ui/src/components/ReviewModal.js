import Dialog from "@mui/material/Dialog";
import ReviewForm from "./ReviewForm";

const ReviewModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <ReviewForm handleClose={handleClose} />
    </Dialog>
  );
};

export default ReviewModal;
