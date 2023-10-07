import React from "react"
import { Box, Typography, Stack, Button, Grid } from "@mui/material"
import { BackgroundTheDateSection } from "./styled-components"
import Countdown from "react-countdown"
import { CountdownItem } from "../../components/countdown"

export const TheDateSection = () => {
    return <BackgroundTheDateSection>
        <Grid container spacing={3} 
            columns={12}  
            direction="row"
            justifyContent="center"
            alignItems="center"
            paddingY='40px'
            paddingX={2}
        >
            <Grid item xs={12} marginBottom={5} style={{ paddingTop: '0px' }}>
                <Typography align="center" className="cover-couple-title" variant="h5" data-aos="fade-down">Sabtu</Typography>
                <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <Typography variant="h3" data-aos="fade-right">27</Typography>
                    <Box data-aos="fade-left">
                        <Typography>Januari</Typography>
                        <Typography>2024</Typography>
                    </Box>
                </Stack>
           </Grid>
           <Grid item xs={12} md={6}>
                <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} data-aos="fade-right">
                    <Typography variant="h5" className="cover-couple-title">Akad Nikah</Typography>
                    <Typography variant="subtitle2">09.00 - 10.00</Typography>
                    <Button size="small" variant="outlined" style={{ borderColor: 'black', color: 'black' }}>Tambah ke kalender</Button>
                </Stack>
           </Grid>
           <Grid item xs={12} md={6}>
                <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} data-aos="fade-left">
                    <Typography variant="h5" className="cover-couple-title">Resepsi</Typography>
                    <Typography variant="subtitle2">10.00 - 13.00</Typography>
                    <Button size="small" variant="outlined" style={{ borderColor: 'black', color: 'black' }}>Tambah ke kalender</Button>
                </Stack>
           </Grid>
           <Grid item xs={12} marginTop={5}>
                <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} data-aos="fade-up">
                    <Typography align="center" variant="h5" className="cover-couple-title" marginBottom={2}>West Point Hotel</Typography>
                    <Typography align="center" marginBottom={2}>Jl. LMU.Nurtanio No.63, Dungus Cariang, Kec. Andir, Kota Bandung, Jawa Barat 40183</Typography>
                    <Button size="small" variant="outlined" style={{ borderColor: 'black', color: 'black' }} onClick={() => {
                            window.open('https://www.google.com/maps/place/West+Point+Hotel/@-6.9125119,107.5754503,17z/data=!4m9!3m8!1s0x2e68e60bb9ee1965:0x7ad86e0de5b52178!5m2!4m1!1i2!8m2!3d-6.9124746!4d107.5780199!16s%2Fg%2F11c57mf9s6?entry=ttu', '_blank')
                        }}>Lihat Map</Button>
                </Stack>
           </Grid>
        </Grid>
    </BackgroundTheDateSection>
}