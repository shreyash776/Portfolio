import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Parallix from './Components/Parallix'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Cursor from './Components/Cursor'
import './App.css'
function App() {
  

  return (
    <>
    <Cursor />
    <section id='Homepage'>
      <Navbar />
      <Home />
    </section>
    <section > <Parallix /></section> 
        <Projects />
    <section id='Contact'>
      <Contact />
    </section>
   
    </>
  )
}

export default App
