import * as React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import  Typography1 from '../components/Typography1';
import appCurvyLines from '../assets/appCurvyLines.png'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HistoryIcon from '@mui/icons-material/History';
import { color } from '@mui/system';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light',backgroundColor: "white" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative',backgroundColor: "white" }}>
        <Box
          component="img"
          src={appCurvyLines}
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item } >
            <CreateIcon 
               sx={{ height: 55,  }}
              />

              <Typography1 variant="h6" sx={{ my: 5 }}>
                Create your first Quiz!
              </Typography1>
              <Typography1 variant="h5">
                {
                  'You will have the freedom of creating your own Quiz, any topic, any questions.  '
                }

               
              </Typography1>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <PersonAddIcon 
               sx={{ height: 55,  }}
              
              />
              <Typography1 variant="h6" sx={{ my: 5 }}>
                Add Players
              </Typography1>
              <Typography1 variant="h5">
                {
                  'Add as many players as you want. '
                }
              </Typography1>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <HistoryIcon
               sx={{ height: 55,  }}
              
              />
              <Typography1 variant="h6" sx={{ my: 5 }}>
                Play previous Quizes
              </Typography1>
              <Typography1 variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography1>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;