import React from "react"
import { Typography, Stack } from "@mui/material"
import Countdown from 'react-countdown';
import { CountdownItem } from "../../components/countdown";
import { ParallaxBanner } from "react-scroll-parallax";
import BackgroundImage from '../../assets/images/save-thedate-background-1.jpg'

export const CountdownSection = () => {

    return  <ParallaxBanner
      layers={[{ image: BackgroundImage, speed: -15 }]}
    >
        <Stack direction='column' justifyContent='flex-start' alignItems='center' spacing={2} paddingX={4} paddingTop='40px' paddingBottom='60px'>
            <Typography variant="h5" className="molde-condensed-bold" data-aos="fade-down">JANUARY 27<sup></sup>, 2024</Typography>
            <Countdown
                date={new Date('2024-01-27')}
                renderer={CountdownItem}
            />
        </Stack>
  </ParallaxBanner>
}