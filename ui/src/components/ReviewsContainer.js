import { useParams } from "react-router-dom";
import { getReviews } from "../utility/api";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Fragment } from "react";
import FormGroup from '@mui/material/FormGroup';
import TextField from "@mui/material/TextField";
import ReviewModal from "./ReviewModal";



export default function ReviewsContainer() {
  const [state, setState] = useState({
    left: false,
  })

  const [data, setData] = useState()
  const [flag, setFlag] = useState()

  const { id } = useParams()
 
  useEffect(() => {
    getReviews(id)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [])
console.log('data in the reviews container', data)

  if (!data) {
    return <>Loading Reviews...</>;
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onClickHandler = (event, source) => {
    // Do something with event
    console.log(event);

    // Use the passed parameter
  console.log(source)
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 425 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {data.map((element) => {
        return (
          <Card
            raised
            sx={{
              maxWidth: 400,
              margin: "0 auto",
              padding: "0.1em",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h6">{element.summary}</Typography>
              <Rating name="read-only" value={element.rating} readOnly />
              <Divider></Divider>
              <TextField value={element.review} disabled={true}></TextField>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <br></br>
                <Typography variant="body2" color="text.secondary">Review by:  </Typography>
                <Typography variant="body2">{element.reviewer_name}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <br></br>
                <Typography variant="body2" color="text.secondary">Posted on:</Typography>
                {/* <Typography variant="body2"> {dateFormatter(element.dateCreated)}</Typography> */}
              </Box>
              <br></br>
              <FormGroup>
              <Button onClick={(event) => onClickHandler(event, element.id)}>Edit this Review</Button>
            
    
    </FormGroup>
            </CardContent>
            
          </Card>
        );
      })}
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Read Reviews</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
