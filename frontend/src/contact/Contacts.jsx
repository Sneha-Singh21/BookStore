import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Contacts;
