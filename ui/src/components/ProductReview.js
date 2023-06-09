import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReviewModal from "./ReviewModal";
import { useState } from "react";

export default function ProductReview(props) {
 
  const { name } = props

  const [open, setOpen] = useState(false)
 
  // Review modal dialog open
  const handleOpen = () => {
    setOpen(true)
  };

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
        sx={{ marginTop: "10px", width: "225px" }}
        onClick={handleOpen}
        target="_blank"
      >
        Leave a Review!
      </Button>
      <ReviewModal open={open} handleClose={handleClose} />
      <br></br>
      <br></br>
      <Typography gutterBottom variant="h7" component="div">
        For {name}
      </Typography>
    </>
  );
}
