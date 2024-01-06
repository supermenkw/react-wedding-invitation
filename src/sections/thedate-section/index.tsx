import React from "react"
import { Box, Typography, Stack, Button, Grid } from "@mui/material"

export const TheDateSection = () => {
    return <Box>
        <Grid container spacing={3} 
            columns={12}  
            direction="row"
            justifyContent="center"
            alignItems="center"
            paddingY='40px'
            paddingX={2}
        >
          <Grid item xs={12} marginBottom={5} style={{ paddingTop: '0px' }}>
                <Typography align="center" className="cover-couple-title" variant="h5" data-aos="fade-down" fontWeight={600}>Sabtu</Typography>
                <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <Typography variant="h3" data-aos="fade-right" fontWeight={600}>27</Typography>
                    <Box data-aos="fade-left">
                        <Typography fontWeight={600}>Januari</Typography>
                        <Typography fontWeight={600}>2024</Typography>
                    </Box>
                </Stack>
           </Grid>
           <Grid item xs={12} md={6}>
                <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} data-aos="fade-right">
                    <Typography variant="h5" className="cover-couple-title" fontWeight={600}>Akad Nikah</Typography>
                    <Typography color='#CADADD'>08.00 - 10.00</Typography>
                    <Button size="small" variant="outlined" style={{ borderColor: '#CADADD', color: '#CADADD' }} onClick={() => {
                      window.open('https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MzI5ZnY2ZzVsMXY1bHI2b2x0MW1sY3NmaWggc3VwZXJtZW5rd0Bt&tmsrc=supermenkw%40gmail.com', '_blank')
                    }}>Tambah ke kalender</Button>
                </Stack>
           </Grid>
           <Grid item xs={12} md={6}>
                <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} data-aos="fade-left">
                    <Typography variant="h5" className="cover-couple-title" fontWeight={600}>Resepsi</Typography>
                    <Typography color='#CADADD'>11.00 - 14.00</Typography>
                    <Button size="small" variant="outlined" style={{ borderColor: '#CADADD', color: '#CADADD' }} onClick={() => {
                      window.open('https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjBqM3ZsNzZmbnYzbDFudW9zNW5xM2YwbHQgc3VwZXJtZW5rd0Bt&tmsrc=supermenkw%40gmail.com', '_blank')
                    }}>Tambah ke kalender</Button>
                </Stack>
           </Grid>
           <Grid item xs={12} marginTop={5}>
                <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} data-aos="fade-up">
                    <Typography align="center" variant="h5" className="cover-couple-title" marginBottom={2} fontWeight={600}>West Point Hotel</Typography>
                    <Typography align="center" className="cover-couple-title" marginBottom={2} color='#CADADD'>Ballroom Garuda</Typography>
                    <Typography align="center" marginBottom={2} color='#CADADD'>Jl. LMU.Nurtanio No.63, Dungus Cariang, Kec. Andir, Kota Bandung, Jawa Barat 40183</Typography>
                    <Button size="small" variant="outlined" style={{ borderColor: '#CADADD', color: '#CADADD' }} onClick={() => {
                            window.open('https://www.google.com/maps/place/West+Point+Hotel/@-6.9125119,107.5754503,17z/data=!4m9!3m8!1s0x2e68e60bb9ee1965:0x7ad86e0de5b52178!5m2!4m1!1i2!8m2!3d-6.9124746!4d107.5780199!16s%2Fg%2F11c57mf9s6?entry=ttu', '_blank')
                        }}>Lihat Map</Button>
                </Stack>
           </Grid>
        </Grid>
    </Box>
}