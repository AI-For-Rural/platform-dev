import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import "./Sign_bar.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title: {
      flexGrow: 1,
      padding: "0.3125rem",
    },
  }),
);

export default function AccountWrap() {
  const classes = useStyles();

  return (
    <div id="Head" className={classes.root}>
      <AppBar className="Pre-head" position="static">
        <Toolbar>
          <Typography id="description" variant="h6" className={classes.title}>
           <ul className="pre-class">
              <li><h1>Sign Up</h1></li>
              <li><p>Create An Account</p></li>
            </ul>
          </Typography>
          <Box id="brand" color="inherit">
            <img className="img-fluid" src="https://aifr-platform.netlify.app/static/media/logo-1.343afc1b.svg" alt="Logo" />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}