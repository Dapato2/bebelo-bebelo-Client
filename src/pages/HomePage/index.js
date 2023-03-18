import "./index.css";
import * as React from 'react';
import {Navbar} from '../../components/index'
import Typography from '@mui/material/Typography';




function HomePage() {
  return (
    <div>
      <Navbar/>
      <Typography className="titleH" > 
        HOME PAGE
      </Typography>
    </div>
  );
}

export default HomePage;

