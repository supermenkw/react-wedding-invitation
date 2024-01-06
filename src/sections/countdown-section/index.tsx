import React, { useEffect } from "react"
import { Typography, Stack, Box,  } from "@mui/material"
import { BackgroundCountdownSection, TheDateText } from "./styled-components"
import Countdown from 'react-countdown';
import { CountdownItem } from "../../components/countdown";
import SaveTheDateGif from '../../assets/images/save-the-date.gif'
import { ParallaxBanner } from "react-scroll-parallax";
import BackgroundImage from '../../assets/images/save-thedate-background-1.jpg'

type Props = {
    isOpened: boolean
}

export const CountdownSection: React.FC<Props> = ({ isOpened }) => {

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