import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledApp } from './components/styles/appStyle';
import Topbar from "./components/navbar/topbar"
import Home from './components/pages/home';
import Footer from './components/footer/footer';
import About from './components/pages/about';
import Contact from './components/pages/contact';

const App : React.FC = () => {
  return (
   <>
    <BrowserRouter>
      <StyledApp>
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </StyledApp>
    </BrowserRouter>
   </>
  );
}

export default App;
