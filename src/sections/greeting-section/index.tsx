import React from "react"
import { Box, Typography } from "@mui/material"
import { BackgroundGreetingSection } from "./styled-components"

type Props = {
    guest: string
}

export const GreetingSection: React.FC<Props> = ({ guest }) => {

    console.log(guest)

    return <BackgroundGreetingSection>
        <Box paddingX={4} paddingY={5}>
            <Typography variant="h5" align="center" className="cover-couple-title">Dear {`${guest}`}</Typography>
            <Typography variant="subtitle1" align="center">Dengan memohon rahmat & ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/I dalam acara resepsi pernikahan kami</Typography>
        </Box>
    </BackgroundGreetingSection>
}