import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/logo.png'

export default function Header() {
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography
            variant="h4"
            noWrap
            href="/"
            component="a"
            sx={{  textDecoration: 'none', onClick:"/" , display: { xs: 'none', sm: 'block' } }}
          >
            withrubber.com
          </Typography>
         
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}