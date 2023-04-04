import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  
  console.log('this is the url', window.location.href)
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