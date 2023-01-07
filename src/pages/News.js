import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import background from './pexels-photomix-company-96622.jpg'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './news.css'

const Item = styled(Paper)(({ theme }) => ({
  height:"20vh",
  width: "100%",
  justifyContent:'center',
  display: 'flex',
  alignItems:'center',
  // ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const News = () => {
  return (
    <div className='newsgrid' style={{backgroundImage: `url(${background})`, height:"91.2vh",width:"100%",backgroundSize:"cover"}}>
      <Box m={25} sx={{ flexGrow: 1 }} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>News Item</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
    
  );
}

export default News