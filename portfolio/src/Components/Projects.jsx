import React,{useRef}from 'react'
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
const items=[
    {
        id:1,
        title:"Nike Store",
        desc:"This project is an e-commerce website developed using React.js, offering a user-friendly interface for browsing and purchasing premium footwear. ",
        img:"/nike.png"
        
    },
    {
        id:2,
        title:"plant vs zombie",
        desc:"plant vs zombie game built using javascript ",
        img:"/Screenshot 2024-01-25 201551.png"
    },
    {
        id:3,
        title:"Todo-list",
        img:"/todo.png ",
        desc:  "A sleek and efficient React-powered todo list for seamless task management."
    },
    {
        id:4,
        title:"amazon-clone",
        img:"/amazon.png",
      
        desc:"A visually stunning Amazon clone list crafted with HTML and CSS for immersive online shopping experience."
    },
 
    {
        id:5,
        title:"Traveler",
        img:"/traveller.png",
      
        desc:"A traveler website list featuring destinations and experiences, crafted with HTML, CSS, and Js"
    },


    {
        id:6,
        title:"Weather",
        img:"/weather.png",
      
        desc:"A modern weather app powered by React, delivering real-time forecasts and intuitive user experience for weather updates."
    },
    {
        id:7,
        title:"Js Animations",
        img:"/animation.png",
      
        desc:
        "A captivating web page enhanced with JavaScript animations, offering an engaging user experience through dynamic visual effects and interactivity."
    },
]

const Single=({item})=>{

    const ref=useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
    });
    const y=useTransform(scrollYProgress,[0,1],[-390,350]);
 return(
    <section id="Projects" >
       <div className='container'>
       <div className='p-wrapper'>
       <div className='img-box' ref={ref}>
       <img className='project-img' src={item.img} alt="img" />
        </div>
        <motion.div className='textContainer' style={{y}} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
        </motion.div>
       </div>
       
       </div>
    </section>
 )
}
const Projects = () => {
    const ref =useRef()
    const {scrollYProgress} =useScroll({target:ref,offset:["end end","start start"]})
   const scaleX =useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
   })
  return (

    <div className='projects' ref={ref}>
    <div className='progress' >
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className='progressBar'>       </motion.div>
    </div>
      {items.map(item =>(
        <Single item ={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Projects
