// import * as React from 'react';
import { styled, alpha } from "@mui/material/styles";
// import { Button } from '@mui/material'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle, DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { Badge, List, ListItem, MenuItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

type props = {
  toggleDarkMode: () => void;
  darkmode: boolean;
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const midLinks = [
  {Title: "RE-STORE", path: "/"},
  { Title: "Catalog", path: "/catalog" },
  { Title: "About", path: "/about" },
  { Title: "Contacts", path: "/contact" },
];

const rightItems = [
  {Title: "Login", path:"/login"},
  {Title: "Register", path:"/register"},
]

export default function SearchAppBar({ darkmode, toggleDarkMode }: props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{display: { xs: "none", sm: "block" } }}
            >
              RE-STORE
            </Typography> */}
          <List sx={{ display:"flex"}}>
            {midLinks.map(({ Title, path }) => (

              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{ color: "inherit", typography: "h6", minWidth:130,textDecoration:'none' , 
                  '&:hover':{
                  color:'grey.500'
                  },
                  '&.active':{
                    color: 'secondary.main'
                  }

              }}
              >
                {Title}
              </ListItem>
            ))}
          </List>

          <Box sx={{ flexGrow: 1 }}/>
          <IconButton> {
            <Badge badgeContent='4' color="secondary">
              <ShoppingCart sx={{ color:'white' }} />
            </Badge>} 
            </IconButton>
          <IconButton sx={{ marginLeft: 3 }} onClick={toggleDarkMode}>
            {darkmode ? (
              <DarkMode />
            ) : (
              <LightMode sx={{ color: "white", fontSize: 25 }} />
            )}
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <div>
            <IconButton 
             id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >
              {<AccountCircle sx={{ color: "white", fontSize: 40 }} />}
            </IconButton>

            <Menu 
            id="dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            >
              {rightItems.map(({Title, path})=>(
                <MenuItem
                  key={path}
                  component={NavLink}
                  to={path}
                  onClick={handleClose}
                >
                  {Title}
                </MenuItem>
              ))}
              
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
