import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import React, { useState } from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>();

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "0px 2px 5px #1976d2" }}>
        <Toolbar>
          <img className={"logo"} src="meethub_logo.png" alt="logo" />
          <Box sx={{ flexGrow: 6 }} />
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-evenly" }}>
            <Button variant="outlined" style={{ width: "45%" }}>
              Meetings
            </Button>
            <Button variant="outlined" style={{ width: "45%" }}>
              Friends
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
                setMenuOpened(true);
              }}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            open={menuOpened}
            onClose={() => setMenuOpened(false)}
          >
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}