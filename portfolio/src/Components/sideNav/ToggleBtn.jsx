import { motion} from 'framer-motion'
import React from 'react'

const ToggleBtn = ({setOpen}) => {
  return (
   <button onClick={()=>setOpen((prev)=>!prev)}>
     <svg width="23" height="23" viewBox="0 0 23 23">
      <motion.path  strokeWidth="3" stroke="black" strokeLinecap="round" 
      variants={{closed:{d:"M 2 2.5 L 20 2.5"},
      open:{d:"M 3 16.5 L 17 2.5"}}} ></motion.path>
      <motion.path d="M2 8.5 L20 8.5" strokeWidth="3" stroke="black" strokeLinecap="round"
      variants={{closed:{opacity:1},
      open:{opacity:0},}}></motion.path>
      <motion.path  strokeWidth="3" stroke="black" strokeLinecap="round"
      variants={{
        closed:{d:"M 2 14.5 L 20 14.5"},
        open:{
          d:"M 3 2.5 L 17 16.346"
        },
      }}></motion.path>
    </svg>
   </button>
  )
}

export default ToggleBtn
