import { Grid, Box, Typography } from "@mui/material"
import React, { useRef, useState, useEffect } from "react"
import AnggaPhoto from '../../assets/images/pp1.jpg'
import SelarasPhoto from '../../assets/images/pp2.jpg'
import { BoxCouple, BrideImage } from "./styled-components"
import SALogo from '../../assets/images/SA_white.png'

type Props = {
    isOpened: boolean,
    guest: string
}

export const CoupleSection: React.FC<Props> = ({isOpened, guest}) => {
    const targetRef1: any = useRef(null);
    const targetRef2: any = useRef(null);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const placeholderImage = 'https://placehold.co/400?text=Image'

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
      };

      const observer = new IntersectionObserver((entries: any) => {
        const [entry] = entries;
        setIsVisible1(entry.isIntersecting);
      }, options);

      if (targetRef1.current) observer.observe(targetRef1.current);


      return () => {
        if (targetRef1.current) observer.unobserve(targetRef1.current);
      };
    }, [targetRef1]);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
      };

      const observer = new IntersectionObserver((entries: any) => {
        const [entry] = entries;
        setIsVisible2(entry.isIntersecting);
      }, options);

      if (targetRef2.current) observer.observe(targetRef2.current);


      return () => {
        if (targetRef2.current) observer.unobserve(targetRef2.current);
      };
    }, [targetRef2]);

    return (
      <Box            
        paddingTop='40px'
        paddingBottom='50px'
        paddingRight={2}
        paddingLeft={4}>
          <Box>
              <img src={SALogo} width={125} className='initial-logo'/>
          </Box>
          <Box paddingX={4} paddingY={5}>
              <Typography variant="h5" align="center" className="cover-couple-title" fontWeight={500} fontSize={{ xs: '18px', md: '20px' }}>Dear {`${guest}`}</Typography>
              <Typography variant="subtitle1" align="center" fontSize={{ xs: '14px', md: '16px' }}>Dengan memohon rahmat & ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/I dalam acara resepsi pernikahan kami</Typography>
          </Box>
          <Box>
            <Grid container spacing={2} 
                columns={12}  
                direction="row"
                justifyContent="center"
                alignItems="center"
                padding={3}
            >
                <Grid item xs={12} marginBottom={3}>
                    <Typography align="center" variant="h4" className={`cover-couple-title molde-condensed-bold-italic`}>WE ARE GETTING MARRIED</Typography>
                </Grid>
                <Grid item xs={12} md={5} display='flex' justifyContent='center' alignItems='center'>
                  <BoxCouple ref={targetRef1} className={`${isVisible1 ? 'BoxCoupleLightOn' : 'BoxCoupleLightOff'}`}>
                      <Box display='flex' justifyContent='center'>
                          <BrideImage src={SelarasPhoto} alt="selaras img" placeholderSrc={placeholderImage}/>
                      </Box>
                      <Typography align="center" marginTop={2} className={`molde-condensed-bold ${isOpened ? 'animate-text-focus-in-1s' : ''}`} fontSize={{ md: '20px' }}>PLAYER 1</Typography>
                      <Typography align="center" fontSize={{ md: '18px' }} fontWeight={600} data-aos="fade-up" data-aos-duration="250">SELARAS AURA MAHARDHIKA</Typography>
                      <Typography color='#CADADD' align="center" fontSize={{ md: '16px' }} onClick={() => window.open("https://www.instagram.com/selarasam/")} style={{ cursor: 'pointer' }} marginBottom={2} data-aos="fade-up" data-aos-duration="500">@selarasam</Typography>
                  </BoxCouple>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Box display='flex' justifyContent='center'>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} display='flex' justifyContent='center' alignItems='center'>
                    <BoxCouple ref={targetRef2} className={`${isVisible2 ? 'BoxCoupleLightOn' : 'BoxCoupleLightOff'}`}>
                      <Box display='flex' justifyContent='center'>
                          <BrideImage src={AnggaPhoto} alt="angga img" placeholderSrc={placeholderImage}/>
                      </Box>
                      <Typography align="center" marginTop={2} className={`molde-condensed-bold ${isOpened ? 'animate-text-focus-in-1s' : ''}`} fontSize={{ md: '20px' }}>PLAYER 2</Typography>
                      <Typography align="center" fontSize={{ md: '18px' }} fontWeight={600} data-aos="fade-up" data-aos-duration="250">ANGGA M GINANJAR</Typography>
                      <Typography color='#CADADD' align="center" fontSize={{ md: '16px' }} onClick={() => window.open("https://www.instagram.com/supermenkw/")} style={{ cursor: 'pointer' }} marginBottom={2} data-aos="fade-up" data-aos-duration="500">@supermenkw</Typography>
                    </BoxCouple>
                </Grid>
            </Grid>
          </Box>
      </Box>
    )
}