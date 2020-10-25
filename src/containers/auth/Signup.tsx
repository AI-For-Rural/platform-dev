import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Main from "../Main";
import "./Sign_bar.css";

const Signup = () => {
  const history = useHistory();
  return (
    <Box>
        <Main />

      <div>
        <header>
        <nav className="navbar navbar-light">
            <div className="container-fluid">
                <a id="description" href="#!" className="navbar-brand">
                    <ul>
                        <li><h1>Sign Up</h1></li>
                        <li><p>Create An Account</p></li>
                    </ul>
                </a>
                <a id="brand" className="navbar-brand" href="#!">
                    <img className="img-fluid" src="https://aifr-platform.netlify.app/static/media/logo-1.343afc1b.svg" alt="Logo" />
                </a>
            </div>
        </nav>
      </header>
      </div>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingY={10}
      bgcolor="#f7f7f7"
      width="100%"
      className="container-fluid"
    >
    
      <form noValidate autoComplete="off">
        <Box
          display="flex"
          flexDirection="column"
          width={500}
          border="1px solid #f4f4f4"
          p={3}
          borderRadius={13}
          bgcolor="#fff"
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            margin="normal"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            margin="normal"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Business Email"
            variant="outlined"
            margin="normal"
            size="small"
          />

          <TextField
            id="outlined-basic"
            label="Create Password"
            variant="outlined"
            margin="normal"
            size="small"
          />

          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            size="small"
          />

          <Box py={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => history.push("/")}
            >
              Sign up
            </Button>

            <Box
              py={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box height={1.4} width="25%" bgcolor="rgba(0,0,0,0.13)" />

              <Box>
                <span> Already have an Account</span>
              </Box>
              <Box height={1.4} width="25%" bgcolor="rgba(0,0,0,0.13)" />
            </Box>

            <Box py={4}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => history.push("/signin")}
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
    </Box>
  );
};

export default Signup;
