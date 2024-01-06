import React, { useEffect, useRef, useState } from "react";
import { getStringAfterLastSlash } from "../../helper/string";
import { iusers } from "../../interface/iusers";
import AOS from "aos";
import firebase from '../../firebase/firebase';
import { BackgroundMusic } from "../../components/music-icon";
import { Box } from "@mui/material";
import { CoverSection } from "../../sections/cover-section";
import { CoupleSection } from "../../sections/couple-section";
import { CountdownSection } from "../../sections/countdown-section";
import { TheDateSection } from "../../sections/thedate-section";
import { GallerySection } from "../../sections/gallery-section";
import { GiftSection } from "../../sections/gift-section";
import { WishesSection } from "../../sections/wishes-section";
import { FooterSection } from "../../sections/footer-section";
import { useNavigate, useParams } from "react-router-dom";
import { VideoSection } from "../../sections/video-section";
import { ToastContainer } from "react-toastify";


export const GuestPage = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [guest, setGuest] = useState<iusers | undefined>()
    const navigate = useNavigate();
    let { id } = useParams();
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    const [isExpandedMusic, setIsExpandedMusic] = useState<boolean>(false)
    const [onHoverMusic, setOnHoverMusic] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement | null>(null);

    if (!id) {
        navigate('/not-found');
        return null; // Return null or another component for the "not-found" route.
      }
  
    const handleWindowBlur = () => {
      if (audioRef.current && isOpened) {
        audioRef.current.pause();
        setIsPlayingMusic(false)
        setIsExpandedMusic(false)
      }
    };
  
    const handleWindowFocus = () => {
      if (audioRef.current && isOpened) {
        audioRef.current.play();
        setIsPlayingMusic(true)
        setIsExpandedMusic(true)
      }
    };
  
    useEffect(() => {
      AOS.init({ duration: 800 });
      AOS.refresh();
    })
  
    useEffect(() => {
      const dataRefUsers = firebase.ref(`/users/${id}`);
  
      dataRefUsers.on('value', (snapshot) => {
          const dataSnapshot = snapshot.val();
  
          if(id && dataSnapshot && dataSnapshot.name) setGuest({ id: id, name: dataSnapshot.name, invitedPeople: dataSnapshot.invitedPeople })
        });
  
    }, []); 
  
    useEffect(() => {
  
      window.addEventListener("blur", handleWindowBlur);
      window.addEventListener("focus", handleWindowFocus);
  
      return () => {
        window.removeEventListener("blur", handleWindowBlur);
        window.removeEventListener("focus", handleWindowFocus);
      };
    }, [isOpened]);

    return <>
        <BackgroundMusic isOpened={isOpened} isPlaying={isPlayingMusic} setIsPlaying={setIsPlayingMusic} isExpanded={isExpandedMusic} setIsExpanded={setIsExpandedMusic}  audioRef={audioRef} setOnHover={setOnHoverMusic} />
        <Box className={`website-blocks ${isOpened ? '' : 'has-cover' }`}>
            <Box className='website-cover'>
                <CoverSection setIsOpened={setIsOpened} guest={guest} audioRef={audioRef} isPlayingMusic={isPlayingMusic} setIsPlayingMusic={setIsPlayingMusic} isExpandedMusic={isExpandedMusic} setIsExpandedMusic={setIsExpandedMusic} onHoverMusic={onHoverMusic}/>
            </Box>
            {
              guest && guest.name && <CoupleSection isOpened={isOpened} guest={guest.name}/>
            }
            <CountdownSection isOpened={isOpened} />
            <TheDateSection />
            <GallerySection />
            <GiftSection />
            <WishesSection guest={guest} />
            <FooterSection />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              theme="dark"
            />
        </Box>
    </>
}