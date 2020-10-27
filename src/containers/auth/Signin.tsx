import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AuthLayouts from '../../layouts/AuthLayout';

const Signin = () => {
  const [checked, setChecked] = React.useState(false);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
  <AuthLayouts title="Sign In">
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingY={10}
      width="100%"
      className="main-box"
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
          <span className="forget-password"><Link>Forget password</Link> </span> 
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="normal"
            size="small"
            type="password"
          />
         

          <Box style={{textAlign:'left'}}>
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
          <Box py={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => history.push("/")}
            >
              Sign in
            </Button>
            <br/>
            <br/>  
            <span className="magic-link"> <Link>Get a magic link for Passwordless login</Link></span>
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

            <Box py={1}>
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
        <span className="sign-footer-message">By clicking Sign in you agree to our <Link>Privacy Policy</Link> and <Link>Terms of Use</Link>
        <br/>
        © 2020 AI for Rural. All rights reserved.</span>
      </form>
    </Box>
   </AuthLayouts>
  );
};

export default Signin;
