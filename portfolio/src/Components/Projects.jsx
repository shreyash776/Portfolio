import {useRef}from 'react'
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
const items=[
    {
        id:1,
        title:"Nike Store",
        desc:"This project is an e-commerce website developed using React.js, offering a user-friendly interface for browsing and purchasing premium footwear. ",
        img:"/nike.png",
        git:"https://github.com/shreyash776/Nike-store"
    },
    {
        id:2,
        title:"Plant vs Zombie",
        desc:"It is a JavaScript and HTML Canvas game reminiscent of Plants vs. Zombies. Strategically deploy plants to fend off waves of zombies in this addictive, fast-paced arcade experience. ",
        img:"/Screenshot 2024-01-25 201551.png",
        git:"https://github.com/shreyash776/plant-vs-zombie"
    },
    {
        id:3,
        title:"Todo-list",
        img:"/todo.png ",
        desc:  "React ToDo is a minimalist to-do list app crafted with React.js. Effortlessly manage tasks with streamlined features for quick adding, deleting, and marking as complete. Stay organized and focused with ReactToDo's clean interface and lightning-fast performance.",
        git:"https://github.com/shreyash776/Todo-list"
    },
    {
        id:4,
        title:"Amazon-clone",
        img:"/amazon.png",
      
        desc:"A visually stunning Amazon clone list crafted with HTML and CSS for immersive online shopping experience.",
        git:"https://github.com/shreyash776/amazon-clone"
    },
 
    {
        id:5,
        title:"Traveler",
        img:"/traveller.png",
      
        desc:"A traveler website list featuring destinations and experiences, crafted with HTML, CSS, and Js",
        git:"https://github.com/shreyash776/traveller"

    },


    {
        id:6,
        title:"Weather",
        img:"/weather.png",
       git:"https://github.com/shreyash776/weather_app",
        desc:"A modern weather app powered by React, delivering real-time forecasts and intuitive user experience for weather updates."
    },
    {
        id:7,
        title:"Js Animations",
        img:"/animation.png",
       git:"https://github.com/shreyash776/Animation",
        desc:
        "A captivating web page enhanced with JavaScript animations, offering an engaging user experience through dynamic visual effects and interactivity."
    },
]

const Single=({item})=>{

    const ref=useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
    });
    const y=useTransform(scrollYProgress,[0,1],[-590,250]);
 return(
    <section id="Projects" >
       <div className='container'>     
       <div className='img-box' ref={ref}>
       <img className='project-img' src={item.img} alt="img" />
        </div>
        <motion.div className='textContainer' style={{y}} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.git} target="_blank">See Demo</a>
            {/* <button><a href={item.git} target="_blank">See Demo</a></button> */}
        </motion.div>
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
        <h1 className='featured-heading'>Featured Works</h1>
        <motion.div style={{scaleX}} className='progressBar'>       </motion.div>
    </div>
      {items.map(item =>(
        <Single item ={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Projects
