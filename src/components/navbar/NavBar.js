import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import pages from "./links";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ position: "fixed" }} sx={{ backgroundColor: "#f77a00"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* This Typography element renders on desktop screen size */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: '1.3rem',
              letterSpacing: ".3rem",
              color: "#02010a",
              textDecoration: "none",
            }}
          >
            Rhythm Messengers
          </Typography>

          {/**This Box is for small screen sizes */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#02010a"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map(({ page, route }) => (
                <MenuItem key={page} component={Link} to={route}>
                  {page === "Instagram" ? <InstagramIcon /> : page}
                </MenuItem>
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
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontSize: {xs:'1rem', sm: '1.2rem', md:'1.3rem'},
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#02010a",
              textDecoration: "none",
              overflow: "visible",
            }}
          >
            Rhythm Messengers
          </Typography>

          {/**This Box is for desktop screen size */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {pages.map(({ page, route }) => (
              <Button
                key={page}
                component={Link}
                to={route}
                sx={{
                  fontWeight:500,
                  fontSize: '1rem',
                  letterSpacing: 2,
                  my: 2,
                  color: "#02010a",
                  "&:hover": {
                    backgroundColor: "rgba(25, 118, 210, 0.13) !important",
                  },
                }}
              >
                {page === "Instagram" ? <InstagramIcon sx={{fontSize:'1.7rem'}}/> : page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
