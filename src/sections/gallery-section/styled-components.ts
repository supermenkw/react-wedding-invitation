import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const VideoSection = styled(LazyLoadImage)`
    width: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
`;

export const PhotosWrapper = styled(LazyLoadImage)`
    width: 100%;
    object-fit: cover;
`;