import React from 'react'
import Home from "./Home/Home.jsx";
import Courses from './courses/Courses.jsx';
import {Routes, Route} from "react-router-dom";
import Signup from './components/Signup.jsx';
import Contacts from './contact/Contacts.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
