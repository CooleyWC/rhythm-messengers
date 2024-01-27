import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'

const pages = [
  {
    page: 'About',
    id: '#about'
  },
  {
    page:'Photos',
    route: 'https://www.instagram.com/rhythmmessengers/'
  },
  {
    page: 'Testemonials',
    route: '/testemonials'
  },
  {
    page: 'Contact',
    id: '#contact'
   
  }
]
function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
    return (
    <AppBar 
      style={{position: 'fixed'}}
      sx={{backgroundColor: '#f77a00'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          {/* This Typography element renders on desktop screen size */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
            Rhythm Messengers
          </Typography>

          {/**This Box is for small screen sizes */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({page, route, id}) => (
                <ScrollIntoView selector={id} key={page}>
                    <MenuItem 
                      key={page} 
                      onClick={handleCloseNavMenu}
                      component={Link}
                      to={route ? route:null}
                      >
                      {page}
                    </MenuItem>
                  </ScrollIntoView>
              ))}
            </Menu>
          </Box>
          {/*This Typography component is for smaller screen sizes */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
            Rhythm Messengers
          </Typography>

          {/**This Box is for desktop screen size */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-evenly' }}>
            {pages.map(({page, route, id}) => (
              <ScrollIntoView selector={id} key={page}>
                <Button
                  component={Link}
                  to={route ? route:null}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </ScrollIntoView>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    );
}

export default NavBar;