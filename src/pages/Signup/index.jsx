import { useState,useContext } from "react";
import {  useNavigate } from "react-router-dom";
import {signupEp} from "../../services/auth.services";
import { Avatar,Button,CssBaseline,ThemeProvider,createTheme,Link, TextField,FormControlLabel,Checkbox,Container,Typography ,Grid,Box} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { AuthContext } from "../../context/auth.context";

const theme = createTheme();


function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username,setUsername] =  useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const {storeToken, authenticateUser} = useContext(AuthContext)
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleFullName = (e) => setFullName(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, fullName, username };


      signupEp(requestBody)
      .then((response) => {

        storeToken(response.data.authToken)
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box  noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                              onChange={handleFullName}
                              value={fullName} 
                autoComplete="full Name"
                name="fullName"
                required
                fullWidth
                id="fullName"
                label="Name & Last Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
            <TextField  
                onChange={handleUsername}
                value={username}
                required
                fullWidth
                id="username"
                label="Username"
                name="username"  
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={handleEmail}
                value={email}              
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlePassword}
                value={password}              
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>

            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body3">
                {"Already have an account? Log in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  </ThemeProvider>
);
}

export default SignupPage;