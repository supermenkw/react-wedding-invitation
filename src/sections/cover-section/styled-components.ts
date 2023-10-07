import { Box, Button, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import BackgroundImage from '../../assets/images/example-cover.jpg'

export const CoverSectionWrapper = styled.section`
    background-image: url('${BackgroundImage}') !important;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
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
        pointer-events: none; /* Allows clicks to go through the overlay */
    }
`

export const focusInExpandAnimation = keyframes`
    0% {
        letter-spacing:-.5em;
        transform:translateZ(-700px) translateY(-500px);
        opacity:0
    }
    40% {
        opacity:.6
    }
    100% {
        transform:translateZ(0) translateY(0);
        opacity:1;
    }
`

export const CouplePhotoSection = styled.img`
    width: 100px;
`

export const GreetingSection = styled(Box)`
    animation: ${focusInExpandAnimation} .8s cubic-bezier(.215,.61,.355,1.000) both;
`

export const CoupleNameSection = styled(Box)`
    font-size: 3rem;
    animation: ${focusInExpandAnimation} .8s cubic-bezier(.215,.61,.355,1.000) both;
`

export const TrackingInExpandAnimation = keyframes`
    0% {
        letter-spacing:-.5em;
        transform:translateZ(-700px) translateY(500px);
        opacity:0}40%{opacity:.6}100%{transform:translateZ(0) translateY(0);
        opacity:1;
    }
`

export const HastagSection = styled.div`
    animation: ${TrackingInExpandAnimation} .8s cubic-bezier(.215,.61,.355,1.000) both
`

export const DateSection = styled.div`
    animation: ${TrackingInExpandAnimation} .7s cubic-bezier(.215,.61,.355,1.000) both
`

export const ButtonInvitation = styled(Button)`
    animation: ${TrackingInExpandAnimation} .6s cubic-bezier(.215,.61,.355,1.000) both
`

export const InvitedPeople = styled(Typography)`
    animation: ${TrackingInExpandAnimation} .5s cubic-bezier(.215,.61,.355,1.000) both
`

export const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(-4px);
  }
`;

// Styled component for the floating icon
export const FloatingIcon = styled(Box)`
  animation: ${floatAnimation} 2s ease-in-out infinite;
`;