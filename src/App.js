import './App.css';
import React from 'react';
import Home from './Home';
import Error from './Error';
import{BrowserRouter as Router, Routes, Route}from "react-router-dom"

const App=()=> {

  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;

