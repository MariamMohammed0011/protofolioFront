import React, { useRef } from "react";
import "../2-hero/Hero.css";
import hero from '../../animations/hero.json'
import Lottie from "lottie-react";
import { motion } from "motion/react";
export default function Hero() {
  const lottieRef =useRef();
  return (
    <section className="hero flex" style={{justifyContent:"space-between"}}>
      <div className="left-section ">
        <div className="parent-avatar  flex">
          <motion.img src="./protofolio.png"
          initial={{transform:"scale(0)"}}
          animate={{transform:"scale(1.1)"}}
          transition={{type:"spring",stiffness:100,damping:6}}
           className="avatar" 
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        className="title">
          Software group design and all mobile application
        </motion.h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit libero
          illum quidem possimus architecto esse unde aut ipsa asperiores
          blanditiis, exercitationem, adipisci ut! At voluptas praesentium ipsum
          quam ea.
        </p>
        <div className="social-icons flex ">
          <div className=" icon icon-facebook"></div>
          <div className="icon icon-linkedin2"></div>
          <div className="icon icon-twitter"></div>
          <div className="icon icon-github"></div>
        </div>
      </div>
      <div className="right-section animation  ">
      <Lottie 
        lottieRef={lottieRef} 
        onLoadedImages={()=>{lottieRef.current.setSpeed(1)}}
      
       animationData={hero} 
       style={{width:"500px"}}/>
        
      </div>
    </section>
  );
}
