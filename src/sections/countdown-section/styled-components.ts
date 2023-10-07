import styled, { keyframes } from "styled-components";
import { Typography } from '@mui/material'

export const BackgroundCountdownSection = styled.section`
    background: #656A4C;
    color: #E9ECE5
`;

const TheDateTextAnimation = keyframes`
    0% {
        filter:blur(12px);
        opacity:0;
    }
    100% {
        filter:blur(0);
        opacity:1;
}`

export const TheDateText = styled(Typography)`
    animation:${TheDateTextAnimation} 4s cubic-bezier(.55,.085,.68,.53) both;
`;