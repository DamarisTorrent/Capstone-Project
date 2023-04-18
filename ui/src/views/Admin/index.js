import { useState } from "react";
import { getAdminDetail } from "../../utility/api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Header from "../../layouts/Header";

function Admin() {
  const [data, setData] = useState();

  const [state, setState] = useState({
    style: "",
    retailer: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleClick = () => {
    getAdminDetail(state.style, state.retailer)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
    
  };

  return (
    <>
      <Header></Header>
      <br></br>
      <FormControl fullWidth>
        <InputLabel id="style-label">Product Style</InputLabel>
        <Select
          labelId="style-label"
          name="style"
          label="Style"
          displayEmpty
          value={state.style}
          onChange={handleChange}
        >
          <MenuItem value={"tops"}>Tops</MenuItem>
          <MenuItem value={"springsuits"}>Springsuits</MenuItem>
          <MenuItem value={"2mm"}>2mm</MenuItem>
          <MenuItem value={"3mm"}>3mm</MenuItem>
          <MenuItem value={"4mm"}>4mm</MenuItem>
          <MenuItem value={"5mm"}>5mm</MenuItem>
          <MenuItem value={"boots"}>Boots</MenuItem>
          <MenuItem value={"hoods"}>Hoods</MenuItem>
          <MenuItem value={"gloves"}>Gloves</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl fullWidth>
        <InputLabel id="retailer-label">Retailer </InputLabel>
        <Select
          labelId="retailer-label"
          name="retailer"
          label="Retailer"
          displayEmpty
          value={state.retailer}
          onChange={handleChange}
        >
          <MenuItem value={"WO1"}>Watersports Outlet</MenuItem>
          <MenuItem value={"WW1"}>Wetsuit Wearhouse</MenuItem>
          <MenuItem value={"CL1"}>Cleanline Surf</MenuItem>
          <MenuItem value={"ON1"}>Oneill</MenuItem>
          <MenuItem value={"RC1"}>Rip Curl</MenuItem>
          <MenuItem value={"BB1"}>Billabong</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <br></br>

      <Button variant="outlined" size="large" onClick={handleClick}>
        Upload New Product Data
      </Button>
      <br></br>
      <br></br>
      {data ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Retailer</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((product) => (
                <TableRow
                  key={product.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>
                    {product.retailer_id === "CL1"
                      ? "Cleanline Surf"
                      : "Watersports Outlet"}
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Retailer</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default Admin;
