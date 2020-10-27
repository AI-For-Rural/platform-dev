import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import AifrLogo from "../assets/svg/logo.svg";
import { Button } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";

import Avatar from "@material-ui/core/Avatar";
import QuickActions from "../components/QuickActions";

const mainMenu = [
  { value: "people", label: "People & Partners" },
  { value: "opportunities", label: "Opportunities" },
  { value: "programs", label: "Programs" },
  { value: "stories", label: "Stories" },
  { value: "events", label: "Events" },
];

const filterMenu = [
  { value: "topics", label: "By Topics" },
  { value: "level", label: "All Levels" },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {},
    toolBar: { justifyContent: "space-between" },
    logo: {
      marginRight: theme.spacing(2),
    },

    toggleMenuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuButton: {
      margin: theme.spacing(1),
      textTransform: "capitalize",
      fontWeight: "normal",
    },

    filterButtonContainer: {
      borderRightStyle: "solid",
      borderRightWidth: 0.5,
      borderRightColor: "rgba(0,0,0,0.12)",
    },
  })
);

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        variant="elevation"
        className={classes.appBar}
      >
        <Toolbar variant="dense" className={classes.toolBar}>
          <Box display="flex" alignItems="center">
            <img
              src={AifrLogo}
              height={40}
              alt="AIFR Logo"
              className={classes.logo}
            />

            <Box display="flex" flexDirection="row" alignItems="center">
              {mainMenu.map((menu) => (
                <Button
                  className={classes.menuButton}
                  variant="text"
                  endIcon={<ExpandMore />}
                >
                  {menu.label}
                </Button>
              ))}
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            {/** Search Platform */}

            <Box>
              <IconButton color="default" size="small">
                <SearchIcon />
              </IconButton>
            </Box>

            <Box display="flex" flexDirection="row" alignItems="center">
              {filterMenu.map((menu) => (
                <Box key={menu.value} className={classes.filterButtonContainer}>
                  <Button
                    className={classes.menuButton}
                    variant="text"
                    size="small"
                    endIcon={<ExpandMore />}
                  >
                    {menu.label}
                  </Button>
                </Box>
              ))}

              <Box display="flex" alignItems="center" paddingX={3}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />

                <IconButton color="default" size="small">
                  <ExpandMore />
                </IconButton>
              </Box>
            </Box>
            <IconButton
              edge="start"
              className={classes.toggleMenuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/** Quick Actions */}
      <QuickActions />
    </div>
  );
};

export default Main;
