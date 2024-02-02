import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import Screen from "./Screen.jsx";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          // background:
          // "linear-gradient(10deg, #251E78 0%, rgba(59, 49, 222, 0.54) 100%)",
          // justifyContent: "center",
          boxShadow: "none",
          border: "none",

          // display: "flex",
          // alignItems: "center/",
          // margin: "0 auto",
          // textAlign: "center",
        }}>
        <Toolbar>
          <StorageIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Jabbar
              </Typography>
              <Screen />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor='secondary'
                textColor='inherit'
                value={value}
                onChange={(e, value) => setValue(value)}>
                <Tab label='Home' />
                <Tab label='About Us' />
                <Tab label='Pricing' />
                <Tab label='Get Support' />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant='contained'>
                Login
              </Button>
              {/*     <Button sx={{ marginLeft: "10px" }} variant='contained'>
                SignUp
          </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
