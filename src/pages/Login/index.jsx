import * as React from 'react'
import "./index.css"
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Paper,Box,Grid,Typography,createTheme, ThemeProvider } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {signupEp,loginEp} from '../../services/auth.services'
import { useNavigate } from "react-router-dom";
import { useContext,useState } from "react";
import { AuthContext } from "../../context/auth.context";
import logoImg from "../../assets/logoImg.png";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#000004",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    third:{
    main: '#390040',
  }
  },
});

 function Login(props) {

    const navigate = useNavigate()
    //pongo en uso el contexto
    const {storeToken, authenticateUser} = useContext(AuthContext)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("") 

  const handleSubmit = async() => {
   
    try {
       
        const response = await loginEp({email,password})
        
        storeToken(response.data.authToken)
        authenticateUser();
        navigate("/");
        
    } catch (error) {
        console.log("error ",error)
        if(error.response && error.response.data && error.response.data.messageError){

            console.log("Error:",error.response.data.messageError)
        }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:`url(${logoImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: "#ffe4e1",
            backgroundSize: '50%',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box   noValidate  sx={{ mt: 1 }}>

              <TextField  
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color='third'
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}              
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>

                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Login;