import * as React from 'react';
import image1 from '../../assets/images/1_square.jpg'
import image2 from '../../assets/images/16.jpg'
import image3 from '../../assets/images/5_square.jpg'
import image4 from '../../assets/images/4_square_.jpg'
import image5 from '../../assets/images/7_square_.jpg'
import image6 from '../../assets/images/11_square_.jpg'
import image7 from '../../assets/images/13.jpg'
import image8 from '../../assets/images/14.jpg'
import image9 from '../../assets/images/15.jpg'
import { Backdrop, Box, Fade, Grid, Modal } from '@mui/material';
import { PhotosWrapper, VideoSection } from './styled-components';
import BackgroundImage from '../../assets/images/video-thumbnail-2.jpg'
import { YoutubeEmbed } from '../../components/youtube-embeded';
import { trackWindowScroll } from 'react-lazy-load-image-component';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const GallerySection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const placeholderImage = 'https://placehold.co/400?text=Image'
  const placeholderImage2 = 'https://placehold.co/700x500?text=Video+Thumb'

    return <Box>
      <Grid container
          columns={12}  
          direction="row"
      >
        <Grid item xs={12} md={12} className='video-thumb-wrapper'>
          <VideoSection src={BackgroundImage} placeholderSrc={placeholderImage2} alt='video label' className='video-thumb' style={{ cursor: 'pointer' }} onClick={() => handleOpen()} />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image1} placeholderSrc={placeholderImage} alt='image 1' />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image2} placeholderSrc={placeholderImage} alt='image 2' />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image3} placeholderSrc={placeholderImage} alt='image 3' />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image4} placeholderSrc={placeholderImage} alt='image 4' />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image5} placeholderSrc={placeholderImage} alt='image 5' />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image6} placeholderSrc={placeholderImage} alt='image 6' />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image7} placeholderSrc={placeholderImage} alt='image 7' />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image9} placeholderSrc={placeholderImage} alt='image 8' />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image8} placeholderSrc={placeholderImage} alt='image 9' />
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className='video-dialog'>
            <YoutubeEmbed embedId='j8RS77l79Ko?si=hkkPLfyqa4hDwOoO'/>
          </Box>
        </Fade>
      </Modal>
    </Box>
}

export default trackWindowScroll(GallerySection)