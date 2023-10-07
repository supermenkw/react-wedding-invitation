import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Stack, Typography, Button, Grid } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { GiftSectionWrapper } from './styled-components'
import mandiriLogo from '../../assets/images/LOGO-MANDIRI.webp'
import giftLogo from '../../assets/images/gift-icon_34411-300x300-1.webp'

export const GiftSection = () => {
    const value = '1570004475035';
    const alamat = 'Jl. Gunung Rahayu Dalam 2 No 11, Pasir Kaliki, Cimahi Utara';

    return <GiftSectionWrapper>
        <Grid container columns={12} paddingX={2} paddingY={3}>
            <Grid item xs={12} paddingTop={0}>
                <Typography variant='h5' align='center' className='cover-couple-title' data-aos="fade-down">Wedding Gift</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack direction='column' justifyContent='center' alignItems='center' data-aos="fade-right">
                    <img style={{ width: '150px' }} src={mandiriLogo} />
                    <Typography align='center'>Selaras Aura Mahardhika</Typography>
                    <Stack direction='row' justifyContent='center' alignItems='center'>
                        <Typography align='center'>
                            {value}
                        </Typography>
                        <CopyToClipboard text={value}>
                            <Button onClick={() => {
                                toast.success('Copied')
                            }}>Copy</Button>
                        </CopyToClipboard>
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
            <Stack direction='column' justifyContent='center' alignItems='center' data-aos="fade-left">
                    <img style={{ width: '50px' }} src={giftLogo} />
                    <Typography align='center'>Kostan Selaras</Typography>
                    <Stack direction='row' justifyContent='center' alignItems='center'>
                        <Typography align='center'>
                            {alamat}
                        </Typography>
                        <CopyToClipboard text={alamat}>
                            <Button onClick={() => {
                                toast.success('Copied')
                            }}>Copy</Button>
                        </CopyToClipboard>
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    </GiftSectionWrapper>
}

