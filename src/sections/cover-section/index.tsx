import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ButtonInvitation, CoupleNameSection, CoverSectionWrapper, DateSection, FloatingIcon, HastagSection, InvitedPeople } from './styled-components';
import { iusers } from '../../interface/iusers';
import SALogo from '../../assets/images/SA_black.png'

type Props = {
    setIsOpened: any,
    guest: iusers | undefined,
    audioRef: any,
    isPlayingMusic: any,
    setIsPlayingMusic: any,
    isExpandedMusic: boolean
    setIsExpandedMusic: any,
    onHoverMusic: boolean
}

export const CoverSection: React.FC<Props> = ({ setIsOpened, guest, audioRef, isPlayingMusic, setIsPlayingMusic, isExpandedMusic, setIsExpandedMusic, onHoverMusic }) => {

    useEffect(() => {
        if(isExpandedMusic && !onHoverMusic) {
            setTimeout(() => {
                setIsExpandedMusic(false)
            }, 5000);
        }
    }, [isExpandedMusic])

    return <CoverSectionWrapper>
        <Box className="d-flex align-items-center justify-content-center position-absolute w-100 h-100 text-light">
            <Box>
                <img src={SALogo} width={125} className='initial-logo'/>
                <CoupleNameSection className='cover-couple-title' color='#000' fontSize={{ xs: '2.25rem', md: '3rem' }}>Selaras & Angga</CoupleNameSection>
                <HastagSection className='h4 my-4 text-center'>#SELANGKAHTillJannah</HastagSection>
                <DateSection className='h5 my-4 font-weight-bold text-center cover-couple-title'>27 . 01 . 2024</DateSection>
            </Box>
        </Box>
        {
            guest && guest.id && 
            <>
                <Box className='d-flex align-items-end justify-content-center position-absolute w-100 h-100' style={{ paddingBottom: '6.5rem' }}>
                    <InvitedPeople textAlign='center' color='#fff'>Berlaku untuk {guest.invitedPeople} orang</InvitedPeople>     
                </Box>
                <Box className='d-flex align-items-end justify-content-center position-absolute w-100 h-100 pb-5'>
                    <ButtonInvitation 
                        className='bg-light text-dark' 
                        variant="contained" 
                        endIcon={<FloatingIcon><ArrowDownwardIcon /></FloatingIcon>}
                        onClick={() => {
                            setIsOpened(true)
                            if (audioRef.current && !isPlayingMusic) {
                                audioRef.current.play();
                                setIsPlayingMusic(true);
                                setIsExpandedMusic(true)
                            }
                        }}
                    >
                        Buka Undangan
                    </ButtonInvitation>
                </Box>       
            </>
        }

    </CoverSectionWrapper>
}