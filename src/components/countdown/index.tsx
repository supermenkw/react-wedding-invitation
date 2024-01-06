import React, { useEffect } from 'react';
import { Stack, Typography, Grid } from '@mui/material'

type Props = {
    days: number,
    hours: number, 
    minutes: number, 
    seconds: number, 
    completed: boolean
}

// Random component
const Completionist = () => <Typography>TODAY is THE DAY!</Typography>;

// Renderer callback with condition
export const CountdownItem: React.FC<Props> = ({ days, hours, minutes, seconds, completed }) => {
    
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {

    // Render a countdown
    return <Grid container
            color='#fff'
            rowSpacing={4}
            columns={12}  
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            data-aos='fade-up'
            paddingX={{ xs: 0, md: 30 }}>
                <Grid item md={3} className='time-wrapper'>
                    <Typography align='center' variant='h4' className='molde-condensed-bold'>{days}</Typography>
                    <Typography align='center' variant='h5' className='molde-condensed-bold'>HARI</Typography>
                </Grid>
                <Grid item md={3} className='time-wrapper'>
                    <Typography align='center' variant='h4' className='molde-condensed-bold'>{hours}</Typography>
                    <Typography align='center' variant='h5' className='molde-condensed-bold'>JAM</Typography>
                </Grid>
                <Grid item md={3} className='time-wrapper'>
                    <Typography align='center' variant='h4' className='molde-condensed-bold'>{minutes}</Typography>
                    <Typography align='center' variant='h5' className='molde-condensed-bold'>MENIT</Typography>
                </Grid>
                <Grid item md={3} className='time-wrapper'>
                    <Typography align='center' variant='h4' className='molde-condensed-bold'>{seconds}</Typography>
                    <Typography align='center' variant='h5' className='molde-condensed-bold'>DETIK</Typography>
                </Grid>
    </Grid>;
  }
};