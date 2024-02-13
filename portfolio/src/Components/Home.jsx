import React from 'react'
import {motion} from 'framer-motion'

 const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollBtn:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        },
    },
 };
const sliderVariants={
    initial:{
        x:"0",
    },
    animate:{
        x:"-320%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
};


const Home = () => {
  return (
    <div className='hero'>
   <div className='home-wrapper'>
   <motion.div className='text-container' variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>SHREYASH CHAURASIA</motion.h2>
        <motion.h1 variants={textVariants}>Web Developer</motion.h1>
        <motion.div className='buttons' variants={textVariants}>
            <motion.button variants={textVariants}>See the Latest projects</motion.button>
            <motion.button variants={textVariants}  ><a href="#Contact" >
               Contact Me
            </a></motion.button>
        </motion.div>
        <motion.img variants={textVariants} animate="scrollBtn" className="scroll-img" src="/new.png" height="80px" width="80px"></motion.img>
    </motion.div>
   </div>
   <motion.div variants={sliderVariants} initial="initial" animate="animate" className='sliding-text'>
     
  <h1>Web Developer  React.Js</h1>
   </motion.div>
    <div className='img-container'>
  <img src="/public/final-img.png" ></img>
    </div>
    </div>
  )
}

export default Home
