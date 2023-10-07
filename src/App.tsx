import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { CoverSection } from './sections/cover-section';
import { CoupleSection } from './sections/couple-section';
import { Box } from '@mui/material';
import { GreetingSection } from './sections/greeting-section';
import { TheDateSection } from './sections/thedate-section';
import { CountdownSection } from './sections/countdown-section';
import { FooterSection } from './sections/footer-section';
import { GallerySection } from './sections/gallery-section';
import { WishesSection } from './sections/wishes-section';
import { iusers } from './interface/iusers';
import firebase from './firebase/firebase';
import { getStringAfterLastSlash } from './helper/string';
import { GiftSection } from './sections/gift-section';
import { BackgroundMusic } from './components/music-icon';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [guest, setGuest] = useState<iusers | undefined>()
  const guestId: string = getStringAfterLastSlash(window.location.href)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isExpandedMusic, setIsExpandedMusic] = useState<boolean>(false)
  const [onHoverMusic, setOnHoverMusic] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    const dataRefUsers = firebase.ref(`/users/${guestId}`);

    dataRefUsers.on('value', (snapshot) => {
        const dataSnapshot = snapshot.val();

        console.log(dataSnapshot)

        if(guestId && dataSnapshot && dataSnapshot.name) setGuest({ id: guestId, name: dataSnapshot.name, invitedPeople: dataSnapshot.invitedPeople })
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

  return (
    <div className="App">
        <BackgroundMusic isOpened={isOpened} isPlaying={isPlayingMusic} setIsPlaying={setIsPlayingMusic} isExpanded={isExpandedMusic} setIsExpanded={setIsExpandedMusic}  audioRef={audioRef} setOnHover={setOnHoverMusic} />
        <Box className={`website-blocks ${isOpened ? '' : 'has-cover' }`}>
            <Box className='website-cover'>
                <CoverSection setIsOpened={setIsOpened} guest={guest} audioRef={audioRef} isPlayingMusic={isPlayingMusic} setIsPlayingMusic={setIsPlayingMusic} isExpandedMusic={isExpandedMusic} setIsExpandedMusic={setIsExpandedMusic} onHoverMusic={onHoverMusic}/>
            </Box>
            {
                guest && guest.name && <GreetingSection guest={guest.name} />
            }
            <CoupleSection isOpened={isOpened} />
            <CountdownSection isOpened={isOpened} />
            <TheDateSection />
            <GallerySection />
            <GiftSection />
            <WishesSection guest={guest} />
            <FooterSection />
        </Box>
    </div>
  );
}

export default App;
