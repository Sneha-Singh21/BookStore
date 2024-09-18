import React from 'react'
import Home from "./Home/Home.jsx";
import Courses from './courses/Courses.jsx';
import {Routes, Route, Navigate} from "react-router-dom";
import Signup from './components/Signup.jsx';
import Contacts from './contact/Contacts.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';

const App = () => {
  // for course component authentication
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
