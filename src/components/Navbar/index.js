import * as React from 'react';
import "./index.css"
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Avatar,Button,Tooltip,MenuItem} from '@mui/material'
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Link } from 'react-router-dom';

const pages = [
  {name:'PLAY GAME' , url:"/game"}
];
const settings = [
  
  {name:'Logout', url:'/logout'}
];

function ResponsiveNavbar({_id,email,username,...restUser}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"#000000"}} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <SportsBarIcon sx={{ display: { xs: 'none', md: 'flex',color:'#A8E890',fontSize:'50px'}, mr: 2 }}  />
          <Typography
            variant="h7"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2  rem',
              color: '#A8E890',
              textDecoration: 'none',
              fontSize: '50px  '
            }}
          >
            ¡BEBELO BEBELO!
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
     
           {pages.map((page, index) => (
            <Link
              className='menuLink'
              key={index}
              to={page.url}
              style={{
                padding: "6px 4px",
                textDecoration: "none",
              }}
           
            >
              <MenuItem>             
               <Button>
              <Typography sx={{ color: "white" }} textAlign="center">{page.name}</Typography>
              </Button></MenuItem>    
            </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
     
           {settings.map((settings, index) => (
            <Link
              key={index}
              to={settings.url}
              style={{
                color: "black",
                textDecoration: "none"
              }}
            >
              <MenuItem>              
              <Typography textAlign="center">{settings.name}</Typography>
            </MenuItem>    
            </Link>
            ))}
                
                
                
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveNavbar;