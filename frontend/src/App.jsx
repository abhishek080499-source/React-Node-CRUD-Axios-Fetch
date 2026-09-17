import React from 'react';
import {  Routes, Route } from "react-router-dom";
import HomePageAxios from './pages/HomePageWithAxios';
import HomePageFetch from './pages/HomePageWithFetch';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<HomePageFetch/>}></Route>
        <Route path="/withAxios" element={<HomePageAxios/>}></Route>
      </Routes>
  
  )
}

export default App
