import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Main from "../Main";
import "./Sign_bar.css";

const Signin = () => {
  const [checked, setChecked] = React.useState(false);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
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
            label="Email"
            variant="outlined"
            margin="normal"
            size="small"
            placeholder="you@company.com"
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="normal"
            size="small"
            type="password"
          />

          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Remember Me"
            />
          </Box>

          <Box py={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => history.push("/")}
            >
              Sign in
            </Button>

            <Box
              py={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box height={1.4} width="25%" bgcolor="rgba(0,0,0,0.13)" />

              <Box>
                <span> New to AIFR ?</span>
              </Box>
              <Box height={1.4} width="25%" bgcolor="rgba(0,0,0,0.13)" />
            </Box>

            <Box py={2}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => history.push("/signup")}
              >
                Create Acount
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
    </Box>
  );
};

export default Signin;
