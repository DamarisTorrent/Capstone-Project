import "../../App.css";
import Grid from "@mui/material/Grid";
import ProductContainer from "../../components/ProductContainer";
import { Fragment } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import { displayBrands } from "../../utility/utils";
import { displaySizes } from "../../utility/utils";


function Home() {
  //State for the array of brands selected in the brands checkbox list
  const [brands, setBrands] = useState({
    brand: [],
  })

  //State variables for the other remaining searches
  const [state, setState] = useState({
    thickness: "",
    size: "",
    zipType: "",
    price: 0,
  })

  //An object to contain all of the search parameters
  const queryObject = {
    brands: brands,
    thickness: state.thickness,
    size: state.size,
    zipType: state.zipType,
    price: state.price,
  };

  //Event handler for all changes with the exception of the brand checkbox event
  const handleChange = (event) => {
    const value = event.target.value
    setState({
      ...state,
      [event.target.name]: value,
    })
    
  }

  //Event handler for brand checkbox, returns an array of brands
  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    const { brand } = brands;

    if (checked) {
      setBrands({
        brand: [...brand, value],
      })
    } else {
      setBrands({
        brand: brand.filter((e) => e !== value),
      });
    }
  
  }

  return (
    <Fragment>
      {/* The background image for the homepage */}
      <div className="container homepage-bgimage">
        <Typography
          align="center"
          fontSize="60px"
          fontWeight="bold"
          color="#FDFEFF"
        >
          THE BEST WOMEN'S WETSUITS. THE BEST ONLINE RETAILERS. ALL IN ONE
          PLACE.
        </Typography>
        {/* <span>
          <h1 >
            THE BEST WOMEN'S WETSUITS. THE BEST ONLINE RETAILERS. ALL IN ONE
            PLACE.
          </h1>
        </span> */}
      </div>
      <br></br>
      <Typography align="center" fontSize="32px" fontWeight="bold">
        CHOOSE YOUR STYLE. PICK YOUR BRAND. FIND THE BEST PRICE.
      </Typography>
      <Container>
        <Grid container spacing={4} marginTop={5}>
            <Grid 
              className="filter-container" 
              item 
              xs={2}
              container 
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              >
              <Box sx={{ minWidth: 120 }}>
                {/* This is the brand checkbox  */}
                <Box
                  sx={{
                    minWidth: 120,
                    border: 1,
                    borderRadius: "16px",
                    color: "gray",
                    paddingLeft: 2
                  }}
                >
                  <br></br>
                  <FormControl fullWidth>
                    <FormLabel id="brand">Brand</FormLabel>
                    <FormGroup>
                      {/* Map through the array of brands */}
                      {displayBrands.map((element, index) => {
                        return (
                          <FormControlLabel
                            control={<Checkbox />}
                            label={element}
                            value={element}
                            onChange={handleBrandChange}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                  <br></br>
                </Box>
                <br></br> <br></br>
                {/* This is the thickness select  */}
                <FormControl fullWidth>
                  <InputLabel id="thickness-label">Style/Thickness</InputLabel>
                  <Select
                    labelId="thickness-label"
                    name="thickness"
                    label="Thickness"
                    displayEmpty
                    value={state.thickness}
                    onChange={handleChange}
                  >
                    <MenuItem value= {'all'}>All</MenuItem>
                    <MenuItem value={"Tops"}>Tops</MenuItem>
                    <MenuItem value={"Springsuits"}>Springsuits</MenuItem>
                    <MenuItem value={"2mm"}>2mm</MenuItem>
                    <MenuItem value={"3mm"}>3mm</MenuItem>
                    <MenuItem value={"4mm"}>4mm</MenuItem>
                    <MenuItem value={"5mm"}>5mm</MenuItem>
                    <MenuItem value={"Boots"}>Boots</MenuItem>
                    <MenuItem value={"Gloves"}>Gloves</MenuItem>
                    <MenuItem value={"Hoods"}>Hoods</MenuItem>
                  </Select>
                </FormControl>
                <br></br> <br></br>
                {/* This is the size select */}
                <FormControl fullWidth>
                  <InputLabel id="size-label">Size</InputLabel>
                  <Select
                    labelId="size-label"
                    name="size"
                    label="Size"
                    displayEmpty
                    onChange={handleChange}
                  >
                      <MenuItem value= {'all'}>All</MenuItem>
                    {/* Map through the array of sizes */}
                    {displaySizes.map((element) => {
                      return <MenuItem value={element}>{element}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
                <br></br> <br></br>
                {/* This is the zipper select  */}
                <FormControl fullWidth>
                  <InputLabel id="zipper-label">Zip Style</InputLabel>
                  <Select
                    labelId="zipper-label"
                    name="zipType"
                    label="zipper"
                    displayEmpty
                    onChange={handleChange}
                  >
                    <MenuItem value= {'all'}>All</MenuItem>
                    <MenuItem value={"Chest Zip"}>Chest Zip</MenuItem>
                    <MenuItem value={"Zip Free"}>Zip Free</MenuItem>
                    <MenuItem value={"Back Zip"}>Back Zip</MenuItem>
                    <MenuItem value={"Hooded"}>Hooded</MenuItem>
                  </Select>
                </FormControl>
                <br></br>
                <br></br>
                {/* This is the price radio controls  */}
                <Box
                  sx={{
                    minWidth: 120,
                    border: 1,
                    borderRadius: "16px",
                    color: "gray",
                    borderColor: "gray",
                    paddingLeft: 2
                  }}
                >
                  <br></br>
                  <Grid paddingright={10}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Price
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="price"
                      onChange={handleChange}
                      paddingRight={50}
                    >
                      <FormControlLabel
                        value={150}
                        control={<Radio />}
                        label="Up to $150"
                      />
                      <FormControlLabel
                        value={250}
                        control={<Radio />}
                        label="$150 - $250"
                      />
                      <FormControlLabel
                        value={350}
                        control={<Radio />}
                        label="$250 - $350"
                      />
                      <FormControlLabel
                        value={351}
                        control={<Radio />}
                        label="Over $350"
                      />
                        <FormControlLabel
                        value={0}
                        control={<Radio />}
                        label="All"
                      />
                    </RadioGroup>
                  </FormControl>
                  </Grid>
                  <br></br>
                </Box>
              </Box>
            </Grid >
          {/* The component that loads all wetsuit product cards */}
          <Grid item className="product-container" xs={10}>
            <ProductContainer queryObject={queryObject}></ProductContainer>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Home;
