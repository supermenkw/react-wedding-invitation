import styled, { keyframes } from "styled-components";
import { Typography } from '@mui/material'
import BackgroundImage from '../../assets/images/save-thedate-background-1.jpg'

export const BackgroundCountdownSection = styled.section`
    background-image: linear-gradient(0deg, rgba(30, 30, 55, 0.6), rgba(30, 30, 55, 0.6)), url('${BackgroundImage}') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 16rem;
    color: #fff
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