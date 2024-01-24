import React,{useRef}from 'react'
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
const items=[
    {
        id:1,
        title:"Nike Store",
        desc:"vestibulum tristique odio, et aliquet arcu feugiat at. Suspendisse potenti. Proin feugiat arcu id dui fringilla, vel varius justo ultricies. Integer malesuada quam et congue ",
        img:"https://images.pexels.com/photos/19738565/pexels-photo-19738565/free-photo-of-grand-central-madison.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        
    },
    {
        id:2,
        title:"plant vs zombie",
        desc:"vestibulum tristique odio, et aliquet arcu feugiat at. Suspendisse potenti. Proin feugiat arcu id dui fringilla, vel varius justo ultricies. Integer malesuada quam et congue ",
        img:"https://images.pexels.com/photos/19738565/pexels-photo-19738565/free-photo-of-grand-central-madison.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
        id:3,
        title:"todo-list",
        img:"https://images.pexels.com/photos/19869392/pexels-photo-19869392/free-photo-of-church-in-mountain-valley.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc:"vestibulum tristique odio, et aliquet arcu feugiat at. Suspendisse potenti. Proin feugiat arcu id dui fringilla, vel varius justo ultricies. Integer malesuada quam et congue "
    },
    {
        id:4,
        title:"amazon-clone",
        img:"https://images.pexels.com/photos/19738565/pexels-photo-19738565/free-photo-of-grand-central-madison.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      
        desc:"vestibulum tristique odio, et aliquet arcu feugiat at. Suspendisse potenti. Proin feugiat arcu id dui fringilla, vel varius justo ultricies. Integer malesuada quam et congue "
    },
]

const Single=({item})=>{

    const ref=useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
    });
    const y=useTransform(scrollYProgress,[0,1],[-400,400]);
 return(
    <section >
       <div className='container'>
       <div className='p-wrapper'>
       <div className='img-box' ref={ref}>
       <img  src={item.img} alt="" />
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
        <motion.div style={{scaleX}} className='progressBar'></motion.div>
    </div>
      {items.map(item =>(
        <Single item ={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Projects
