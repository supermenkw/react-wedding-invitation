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
            rowSpacing={4}
            columns={12}  
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            data-aos='fade-up'
            paddingX={{ xs: 0, md: 30 }}>
                <Grid item md={3} className='time-wrapper'>
                    <Typography align='center' variant='h4'>{days}</Typography>
                    <Typography align='center' variant='h5'>Hari</Typography>
                </Grid>
                <Grid item md={3} className='time-wrapper'>
                    <Typography align='center' variant='h4'>{hours}</Typography>
                    <Typography align='center' variant='h5'>Jam</Typography>
                </Grid>
                <Grid item md={3} className='time-wrapper'>
                    <Typography align='center' variant='h4'>{minutes}</Typography>
                    <Typography align='center' variant='h5'>Menit</Typography>
                </Grid>
                <Grid item md={3} className='time-wrapper'>
                    <Typography align='center' variant='h4'>{seconds}</Typography>
                    <Typography align='center' variant='h5'>Detik</Typography>
                </Grid>
    </Grid>;
  }
};