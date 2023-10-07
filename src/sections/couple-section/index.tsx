import { Grid, Box, Typography } from "@mui/material"
import React from "react"
import AnggaPhoto from '../../assets/images/angga_square.jpg'
import SelarasPhoto from '../../assets/images/selaras_square.jpg'
import { CircleImage, CoupleSectionInfo } from "./styled-components"

type Props = {
    isOpened: boolean
}

export const CoupleSection: React.FC<Props> = ({isOpened}) => {
    return <>
        <Box bgcolor='#677360'             
            paddingTop='40px'
            paddingBottom='50px'
            paddingX={5}>
            <Grid container spacing={2} 
                columns={12}  
                direction="row"
                justifyContent="center"
                alignItems="center"
                padding={3}
                border='#fff double'
            >
                <Grid item xs={12} marginBottom={5}>
                    <Typography align="center" color='#fff' variant="h5" className={`cover-couple-title ${isOpened ? 'animate-text-focus-in' : ''}`}>We're getting married</Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box display='flex' justifyContent='center'>
                        <CircleImage src={SelarasPhoto} />
                    </Box>
                    <Typography variant="h5" align="center" className={isOpened ? 'animate-slide-in-left-2s' : ''}>Selaras Aura Mahardhika</Typography>
                    <Typography variant="subtitle1" align="center" className={isOpened ? 'animate-slide-in-left-3s' : ''} onClick={() => window.open("https://www.instagram.com/selarasam/")} style={{ cursor: 'pointer' }}>@selarasam</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Box display='flex' justifyContent='center'>
                        <Typography variant="h2" className={`cover-couple-title ${isOpened ? 'animate-text-focus-in' : ''}`}>&</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box display='flex' justifyContent='center'>
                        <CircleImage src={AnggaPhoto} />
                    </Box>
                    <Typography variant="h5" align="center" className={isOpened ? 'animate-slide-in-right-2s' : ''}>Angga M Ginanjar</Typography>
                    <Typography variant="subtitle1" align="center" className={isOpened ? 'animate-slide-in-right-3s' : ''} onClick={() => window.open("https://www.instagram.com/supermenkw/")} style={{ cursor: 'pointer' }}>@supermenkw</Typography>
                </Grid>
            </Grid>
        </Box>
    </>
}