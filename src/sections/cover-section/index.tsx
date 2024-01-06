import React, { useState, useRef, useEffect } from 'react';
import firebase from '../../firebase/firebase';
import { Box, Button, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ButtonInvitation, CoupleNameSection, CoverSectionWrapper, DateSection, FloatingIcon, HastagSection, InvitedPeople } from './styled-components';
import { iusers } from '../../interface/iusers';
import SALogo from '../../assets/images/SA_white.png'
import { convertObjToArray } from '../../helper/object';

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
    const dataRefUser = firebase.ref('/users');
    const dataList: iusers[] = [
      { invitedPeople:  3, name: 'Yoyo & keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Bunga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ledi & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Jajang & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Tiara', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Wowo & keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Cecep & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Ayi & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Ema Otih', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Ema Mumun', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Ues & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Rizky', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Rizka & suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ia & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Akim & Anak', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Inda & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Kaka Agus & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Pupun & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Imas & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Rizal & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Ela', willingness: 'unconfirmed' },
      { invitedPeople:  5, name: 'Yuyun & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ilham & Pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Ifan & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Dalis & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ihat dan Suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Yuli dan Suami', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Dadan', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Didi dan Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Hj Emul & keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Dede Mail & istri', willingness: 'unconfirmed' },
      { invitedPeople:  5, name: 'Hj Oni & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Nonong', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Uneng & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Tete & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ustadz Eeng Romli & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ustadz Dudu & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Bu Iin', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Apong & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Opariyah', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'H. Jajang & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ustad Aam & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Haerudin & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Rendy & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Asep & Epon', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Dika', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Daniyal', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Yudha', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Maulvi', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Putra & istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ivan & istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Hari', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Farhan', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Fahri', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Robby', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Cecep', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Alwan', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Erik & istri', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Seplita', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Iqbal Musyaffa', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Irgi', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ucup BIG & pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Dape', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Rizkywinaya', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Arif BIG dan keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Senny BIG', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Rika BIG', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Septiani BIG', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Nurul Alfiana BIG', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Bela BIG', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Greyzita BIG', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Lisa BIG', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Ropik BIG', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Aziz BIG', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Ofi BIG', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mas Yusuf', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Bude Ridha & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Mas Lambang & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Mba Angga & keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Pakde Sugeng & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Mba Ika & keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Mba Yeni & keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Pakde Rony & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mas Ridho', willingness: 'unconfirmed' },
      { invitedPeople:  6, name: 'Mpok Titik', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Mbahti Prapto & Budhe Mi', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Pakpuh Eko & Dea', willingness: 'unconfirmed' },
      { invitedPeople:  6, name: 'Pakpuh Alan & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  5, name: 'Pakpuh Heri & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Pakpuh Priyo & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mas Yayang & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Pakpuh Antariksa & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mbah Titik Surati (Mbah Pucang)', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Om Waluyo & Budhe Wiwin', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Om Jefri & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Mbah Lis & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Mbah Sugeng & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Om Anton & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  5, name: 'Om Kusnan Wartoyo & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Om Sutanto & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Om Edy Sulistyo & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Om Dody Firmansyah & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Om Andi Susanto & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Om Imam Nugroho & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Om Agus Muryono & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Ngatijo & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Om Supardijono & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Om Herdi Qoharuddin & Keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Bp. Luthfi Syauqi', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mama Haris', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mama Alya', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mama Qonita', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mama Akbar', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mama Salsa', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Mama Tasya', willingness: 'unconfirmed' },
      { invitedPeople:  16, name: 'Temen Mamah Nilam', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Om Prapto & Tante Yayuk', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Tante Uma & suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp Tri Indra Basuki', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Hadi Mendra', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Zulhaimi', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Bp. Zakki Arsyad', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ibu. Ima Dinayati Mashuri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Gilang Ramadhan', willingness: 'unconfirmed' },
      { invitedPeople:  13, name: 'Keluarga Divisi PSM SSO', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bapak dan ibu Dedy', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bapak dan Ibu Budi', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bapak dan Ibu Mukhlis', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Bapak dan Ibu Sutrisno', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Om Agus & Tante Iis', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Fia & Aji', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Nabila & Pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Kintan', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Niong', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Andal', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Cepi', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Sabrina & pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Dodi', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Aini & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  3, name: 'Indah & keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Nazva & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ableh & Pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Salsa', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ibu Tini Djuantini', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Lina', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Syafina & Erdhanti', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Gita', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Gilda', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Monik', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Fajar & Pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Irham & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ahmad & keluarga', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Prakas', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Randy & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Kiko & Rangga', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Dimas & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Iqbal & Pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Rachmat Hariyanto & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Ifa Alif & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Subhan Novianda Mani & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Patih', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Feni', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Syifa Mutiara H & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Lygia & Pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Habibi', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Tito Daniswara & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Yuki & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Vira & Pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  1, name: 'Rahmi', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Diana & Suami', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Agatha', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Najma & Pasangan', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Dian & Said', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Alfin Bachtiar & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Ibu Dewi Rosdiani', willingness: 'unconfirmed' },
      { invitedPeople:  2, name: 'Bp. Wendi & Istri', willingness: 'unconfirmed' },
      { invitedPeople:  4, name: 'Bp. Riyandhika & Istri', willingness: 'unconfirmed' },
    ]

    const AddInvitation = async (obj: iusers) => {
      const result = await dataRefUser.push(obj);

      console.log(result.key)
      const addedUser = firebase.ref(`/users/${result.key}`)
      addedUser.on('value', (snapshot) => {
        const dataSnapshot = snapshot.val();
        
        addedUser.update({
          ...dataSnapshot,
          id: result.key
        })
      });
    }

    const getAllInvitation = () => {
      dataRefUser.on('value', (snapshot) => {
        const dataSnapshot = snapshot.val();
        
        const objToArray: any = convertObjToArray(dataSnapshot)
        const sorted = objToArray.toSorted((a: any, b: any) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
        console.log(sorted)

        sorted.forEach((data: iusers) => {
          console.log(`${data.name} : https://selangkah.fun/${data.id}`)
        })
      });
    }

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
                {/* <img src={SALogo} width={125} className='initial-logo'/> */}
                <Typography className='molde-condensed-bold-italic animate-text-focus-in-1s' color='#fff' fontSize={{ xs: '2.25rem', md: '3rem' }} fontStyle='italic'>SELARAS & ANGGA</Typography>
                <Typography className='my-4 text-center animate-text-focus-in-2s' fontSize={{ xs: '1rem', md: '1.3rem' }} fontWeight={600}>#SELANGKAHtilljannah</Typography>
                <Typography className='my-4 font-weight-bold text-center animate-text-focus-in-3s' fontSize={{ xs: '1.2rem', md: '1.3rem' }} fontWeight={600}>27 . 01 . 2024</Typography>
            </Box>
        </Box>
        {
            guest && guest.id && 
            <>
                <Box className='d-flex align-items-end justify-content-center position-absolute w-100 h-100' style={{ paddingBottom: '6.5rem' }}>
                    <Typography textAlign='center' color='#fff' className='animate-text-focus-in-1s'>Berlaku untuk {guest.invitedPeople} orang</Typography>     
                </Box>
                <Box className='d-flex align-items-end justify-content-center position-absolute w-100 h-100 pb-5'>
                    {/* <Button className='bg-light text-dark puff-in-center-1s'  onClick={async () => {
                      dataList.forEach(data => {
                        AddInvitation(data)
                      })
                    }}>Tambah Undangan</Button> */}
                    {/* <Button className='bg-light text-dark puff-in-center-1s'  onClick={async () => {
                      getAllInvitation()
                    }}>Get All Undangan</Button> */}
                    <Button 
                        className='bg-light text-dark puff-in-center-1s' 
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
                    </Button>
                </Box>       
            </>
        }

    </CoverSectionWrapper>
}