import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Mylandingpage from './Landingpage';
import "./Style.css"
import Myabout from './About';
import Myhome from './Home';
import Mymenu from './Ourmenu';
import Mylatestproduct from './Latestproduct';
import Myreview from './Myreview';
import Myblog from './Blog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <Mylandingpage/>
   
 
    
    <Routes>
      <Route path='about' element={<Myabout/>}/>
      <Route path='/' element={<Myhome/>}/>
      <Route path='home' element={<Myhome/>}/>
      <Route path='menu' element={<Mymenu/>}/>
      <Route path='product' element={<Mylatestproduct/>}/>
      <Route path='review' element={<Myreview/>}/>
      <Route path='blogs' element={<Myblog/>}/>
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);


