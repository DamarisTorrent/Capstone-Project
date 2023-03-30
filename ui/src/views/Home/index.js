import "../../App.css"
import Grid from '@mui/material/Grid'
import ProductContainer from "../../components/ProductContainer"


function Home() {
  
  return(
    <>
    <div>
      {/* The background image for the homepage */}
      <div className="container homepage-bgimage">
      <span> <h2 className="header">THE BEST WOMEN'S WETSUITS. THE BEST ONLINE RETAILERS. ALL IN ONE PLACE.</h2> </span>
      </div> 
      <Grid 
      container 
      marginTop={10}
      >
        {/* The component that loads all wetsuit product cards */}
        <ProductContainer></ProductContainer>

      </Grid>
    </div>
    </>
  )
}
  

export default Home;
