import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import { GuestPage } from './pages/guest';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path='/' element={<div>You are not invited!</div>} />
                <Route path='/:id' element={<GuestPage />} />
            </Routes>
            
        </div>
    </BrowserRouter>
  );
}

export default App;
