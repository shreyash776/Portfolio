import React,{useRef} from 'react'
import {motion,useScroll,useTransform} from "framer-motion"
const Parallix = () => {

    const ref =useRef()
  const  {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start","end start"]

  })

  const yText=useTransform(scrollYProgress,[0,1],["0%","300%"]);
  const yBg=useTransform(scrollYProgress,[0,0.7],["0%","50%"]);

  return (
    <div className='parallix'
    ref={ref}>
      <motion.h1 style={{y:yText}}>What I Do!</motion.h1>
        <motion.div className='mountain'></motion.div>
        <motion.div style={{x:yBg}} className='stars'></motion.div>
    </div>
  )
}

export default Parallix
   