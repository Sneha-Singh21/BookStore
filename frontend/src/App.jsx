import React from 'react'
import Home from "./Home/Home.jsx";
import Courses from './courses/Courses.jsx';
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
      </Routes>
    </>
  )
}

export default App
