import { Box, Button, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import BackgroundImage from '../../assets/images/cover.jpg'

export const CoverSectionWrapper = styled.section`
    background-image: linear-gradient(0deg, rgba(30, 30, 55, 0.6), rgba(30, 30, 55, 0.6)), url('${BackgroundImage}') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top; 
    background-attachment: fixed;
    position: fixed;
    z-index: 1050;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    transition: cubic-bezier(.2,0,0,1) 2s;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
`

