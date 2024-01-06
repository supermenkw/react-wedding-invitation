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
import BackgroundImage from '../../assets/images/video-thumbnail.jpg'
import { YoutubeEmbed } from '../../components/youtube-embeded';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

export const GallerySection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return <Box>
      <Grid container
          columns={12}  
          direction="row"
      >
        <Grid item xs={12} md={12}>
          <VideoSection src={BackgroundImage} className='video-thumb' style={{ cursor: 'pointer' }} onClick={() => handleOpen()} />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image1} data-aos="fade-down-right" />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image2} data-aos="fade-down" />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image3} data-aos="fade-down-left" />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image4} data-aos="fade-right" />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image5} data-aos="fade-up" />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image6} data-aos="fade-left" />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image7} data-aos="fade-up-right" />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image9} data-aos="fade-up" />
        </Grid>
        <Grid item xs={4} md={4}>
          <PhotosWrapper src={image8} data-aos="fade-up-left" />
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