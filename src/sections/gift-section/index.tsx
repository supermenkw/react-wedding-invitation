import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Stack, Typography, Button, Grid } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { GiftSectionWrapper } from './styled-components'
import mandiriLogo from '../../assets/images/LOGO-MANDIRI.webp'
import giftLogo from '../../assets/images/gift-icon_34411-300x300-1.webp'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const GiftSection = () => {
    const value = '1570004475035 ';
    const alamat = 'The Garden Sariwangi Kav II no 4, Sariwangi, Parongpong, Bandung Barat, 40559 ';

    return <GiftSectionWrapper>
        <Grid container columns={12} paddingX={2} paddingY={3}>
            <Grid item xs={12} paddingTop={0} marginBottom={4}>
                <Typography align='center' className='cover-couple-title molde-condensed-bold-italic' data-aos="fade-down" fontSize={{ xs: '1.5rem', md: '2rem' }}>WEDDING GIFT</Typography>
            </Grid>
            <Grid item xs={12} md={6} marginBottom={{ xs: 4 }}>
                <Stack direction='column' justifyContent='center' alignItems='center' data-aos="fade-right">
                    <img style={{ width: '150px' }} src={mandiriLogo} />
                    <Typography align='center'>Selaras Aura Mahardhika</Typography>
                    <Stack direction='row' justifyContent='center' alignItems='center'>
                        <Typography align='center'>
                            {value}
                            <CopyToClipboard text={alamat} onCopy={() => toast(toast(<Typography textAlign='center'>Copied</Typography>))}>
                                <ContentCopyIcon />
                            </CopyToClipboard>
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
            <Stack direction='column' justifyContent='center' alignItems='center' data-aos="fade-left">
                    <img style={{ width: '50px' }} src={giftLogo} />
                    <Typography align='center'>Rumah</Typography>
                    <Stack direction='row' justifyContent='center' alignItems='center'>
                        <Typography align='center'>
                            {alamat} 
                            <CopyToClipboard text={alamat} onCopy={() => toast(<Typography textAlign='center'>Copied</Typography>)}>
                                <ContentCopyIcon />
                            </CopyToClipboard>
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    </GiftSectionWrapper>
}

