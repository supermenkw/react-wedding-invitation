import React from 'react'
import { VideoSectionWrapper } from "./styled-components"
import { Grid, Typography, Box } from '@mui/material'
import { YoutubeEmbed } from '../../components/youtube-embeded'


export const VideoSection = () => {
  return <VideoSectionWrapper>
    <Grid container columns={12} paddingX={2} paddingY={3}>
        <Grid item xs={12} paddingTop={0} marginBottom={4}>
            <Typography align='center' className='cover-couple-title molde-condensed-bold-italic' data-aos="fade-down" fontSize={{ xs: '1.5rem', md: '2rem' }}>DON'T FORGET TO HAVING FUN</Typography>
        </Grid>
        <Grid item xs={12} paddingX={{ md: 10 }}>
            <YoutubeEmbed embedId='j8RS77l79Ko?si=hkkPLfyqa4hDwOoO'/>
        </Grid>
    </Grid>
  </VideoSectionWrapper>
} 