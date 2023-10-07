import React, { useEffect } from "react"
import { Typography, Stack, Box,  } from "@mui/material"
import { BackgroundCountdownSection, TheDateText } from "./styled-components"
import Countdown from 'react-countdown';
import { CountdownItem } from "../../components/countdown";
import SaveTheDateGif from '../../assets/images/save-the-date.gif'

type Props = {
    isOpened: boolean
}

export const CountdownSection: React.FC<Props> = ({ isOpened }) => {

    return <BackgroundCountdownSection>
        <Stack direction='column' justifyContent='center' alignItems='center' spacing={2} paddingX={4} paddingTop='40px' paddingBottom='60px'>
            <Typography variant="h5" className={isOpened ? 'animate-text-focus-in' : ''}>January 27<sup>th</sup>, 2024</Typography>
            <img src={SaveTheDateGif} style={{ maxHeight: '250px' }}/>
            <Countdown
                date={new Date('2024-01-27')}
                renderer={CountdownItem}
            />
        </Stack>
</BackgroundCountdownSection>
}