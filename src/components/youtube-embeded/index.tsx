import { Box } from '@mui/material';
import React from 'react'

type Props = {
  embedId: string,
}

export const YoutubeEmbed: React.FC<Props>  = ({ embedId }) => (
  <Box className="video-responsive">
    <iframe width="560" height="315"  src={`https://www.youtube-nocookie.com/embed/${embedId}?rel=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </Box>
);