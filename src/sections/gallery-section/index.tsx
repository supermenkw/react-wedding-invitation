import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.342.jpg'
import image2 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.38.jpg'
import image3 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.40.jpg'
import image4 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.401.jpg'
import image5 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.41.jpg'
import image6 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.421.jpg'
import image7 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.4211.jpg'
import image8 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.4367.jpg'
import image9 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.44.jpg'
import image10 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.44348.jpg'
import image11 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.46565.jpg'
import image12 from '../../assets/images/WhatsApp Image 2023-09-08 at 19.08.47.jpg'

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const itemData = [
    {
        img: image1,
        title: 'Breakfast',
    },
    {
        img: image2,
        title: 'Burger',
    },
    {
        img: image3,
        title: 'Camera',
    },
    {
        img: image4,
        title: 'Coffee',
    },
    {
        img: image5,
        title: 'Hats',
    },
    {
        img: image6,
        title: 'Honey',
    },
    {
        img: image7,
        title: 'Basketball',
    },
    {
        img: image8,
        title: 'Fern',
    },
    {
        img: image9,
        title: 'Mushrooms',
    },
    {
        img: image10,
        title: 'Tomato basil',
    },
    {
        img: image11,
        title: 'Sea star',
    },
    {
        img: image12,
        title: 'Bike',
    },
  ];

export const GallerySection = () => {
    return <div>
    <ImageList cols={3}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
            <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=22x`}
            alt={item.title}
            loading="lazy"
            />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
}