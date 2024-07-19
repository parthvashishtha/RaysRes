import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
const pages = ["Home", "About", "Contact Us"];

const HoverButton = styled(Button)({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "2px solid transparent",
    zIndex: 1,
    transition: "all 0.3s",
    pointerEvents: "none",
  },
  "&:hover::before": {
    animation: "$borderAnimation 1.5s linear infinite",
  },
  "@keyframes borderAnimation": {
    "0%": {
      transform: "rotate(0deg)",
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "100%": {
      transform: "rotate(360deg)",
      borderColor: "rgba(255, 255, 255, 0.6)",
    },
  },
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    fontWeight: 500,
    zIndex: 2,
  },
});

const CustomButton = styled(Button)({
  display: "inline-block",
  padding: ".75rem 1.25rem",
  borderRadius: "10rem",
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "1rem",
  letterSpacing: ".15rem",
  transition: "all .3s",
  position: "relative",
  overflow: "hidden",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(12, 207, 255, 0.85)",
    borderRadius: "10rem",
    zIndex: -2,
    transition: "all .3s",
  },
  "&:hover::before": {
    width: "100%",
  },
  "&:hover": {
    animation: "$buttonAnimation 0.5s ease-in-out",
  },
  "@keyframes buttonAnimation": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
});
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 12,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              mr: 5,
            }}
          >
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 10,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <HoverButton
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  ...(index > 0 && { marginLeft: "60px" }), // Apply 30px margin to all but the first button
                }}
              >
                {page}
              </HoverButton>
            ))}
          </Box>

          <CustomButton>Sign up for free electricity</CustomButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
