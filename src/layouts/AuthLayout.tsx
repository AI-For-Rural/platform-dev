import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AifrLogo from "../assets/img/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      marginRight: theme.spacing(1),
      marginTop:'-20px'
    },
  }),
);

const Signin = (props:any) => {
  const classes = useStyles();
  return (
  <Container maxWidth="md">
    <Box className="root">
      <Box className="header">
        <div className="headerTitle">
          <div className="titleheaders">
  <Typography style={{marginRight:'150px', fontSize:'24px'}}>{props.title}</Typography><br/>
  <Typography style={{marginRight:'150px', fontSize:'18px', marginTop: '-20px'}}>{props.subtitle}</Typography>
  </div>
          <img
              src={AifrLogo}
              height={70}
              width={70}
              alt="AIFR Logo"
              className={classes.logo}
            />
          <Typography className="titleLogo">For <br/>Rural</Typography>
          <br/>
          <br/>
          <br/>
      </div>
      </Box>
      {props.children}
    </Box>
  </Container>
  );
};

export default Signin;
