import styled, { keyframes } from "styled-components";
import BackgroundImage from '../../assets/images/collage-photos.jpg'

export const backgroundAnimation = keyframes`
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 840px 420px;
  }
`

export const WishesSectionWrapper = styled.section`
  background-image: linear-gradient(0deg, rgba(30, 30, 55, 0.8), rgba(30, 30, 55, 0.8)), url('${BackgroundImage}') !important;
  background-size: cover;
  background-position: center;
  position: relative;
  color: #fff;
  animation: ${backgroundAnimation} 60s infinite linear;
`;


