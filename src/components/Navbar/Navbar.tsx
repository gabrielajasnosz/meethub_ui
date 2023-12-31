import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Navbar.scss";

export const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: "0px 2px 5px #1976d2" }}
      >
        <Toolbar>
            <div className={'logo'} />
          <Box sx={{ flexGrow: 8 }} />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button variant="outlined" href={"/"} sx={{ width: '200px'}}>
              Meetings
            </Button>
            <Button
              sx={{ width: '200px'}}
              variant="outlined"
              href={"/friends"}
            >
              Friends
            </Button>
            <Button
              variant="outlined"
              sx={{ width: '200px'}}
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
                setMenuOpened(true);
              }}
            >
              <div className={'button-with-icon'}>
                Account
                <KeyboardArrowDownIcon sx={{ marginLeft: '10px'}} />
              </div>
            </Button>
          </Box>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
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
  );
};
