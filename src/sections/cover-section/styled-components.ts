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

export const neonPurpleTextStyleProps = `
  color: #fff;
  filter:
  drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff) drop-shadow(0 0 3px #bc13fe) drop-shadow(0 0 5px #bc13fe)
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

export const pulsateAnimation = keyframes`    
  to {
    filter: drop-shadow(0 0 0.5px #fff) drop-shadow(0 0 1px #fff) drop-shadow(0 0 1.5px #bc13fe) drop-shadow(0 0 2.5px #bc13fe);
  }
`

export const CoupleNameSection = styled(Typography)`
    font-size: 3rem;
    color: #fff;
    animation: ${pulsateAnimation} 1.5s infinite alternate; 
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
  ${neonPurpleTextStyleProps}
`

export const DateSection = styled.div`
  ${neonPurpleTextStyleProps}
`

export const ButtonInvitation = styled(Button)`
    animation: ${TrackingInExpandAnimation} .6s cubic-bezier(.215,.61,.355,1.000) both
    position: relative;
    background: #fff;
    text-transform: uppercase;
    transition: .5s;
    text-align: center;
    
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 5px 5px rgba(188, 19, 254,.3),
                  0 0 10px 15px rgba(188, 19, 254,.2),
                  0 0 15px 15px rgba(188, 19, 254,.1);
      color: #440000;
      background: #fff;
    }
    
    &:active {
      transition-delay: unset;
      transition-duration: .25;
      transform: scale(.95);
    }
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

