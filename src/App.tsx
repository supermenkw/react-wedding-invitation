import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import { GuestPage } from './pages/guest';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (
    <BrowserRouter>
        <div className="App">
        <ParallaxProvider>
            <Routes>
                <Route path='/' element={<div>You are not invited!</div>} />
                <Route path='/:id' element={<GuestPage />} />
                <Route path='/not-found' element={<div>Page not found</div>} />
            </Routes>
        </ParallaxProvider>
        </div>
    </BrowserRouter>
  );
}

export default App;
