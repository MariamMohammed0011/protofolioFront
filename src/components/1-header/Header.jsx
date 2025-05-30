import React, { useEffect, useRef, useState } from "react";
import "../1-header/Header.css";
import logoLight from './logoLight.png';
import logo from './image.png'
export default function Header() {
  const [showModal,setShowModal]=useState(false);
  const [theme,setTheme]=useState(localStorage.getItem("currentMode")??"dark");
   useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log("عرض الشاشة:", width);
    console.log("ارتفاع الشاشة:", height);
  }, []); // [] تعني أن هذا useEffect ينفذ مرة واحدة فقط عند أول تحميل

  useEffect(()=>{
    if(theme==='light'){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    }
    else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  },[theme]);
  return (
   
    <header className=" flex ">
      <button onClick={()=>setShowModal(true)} className="menu icon-menu flex"></button>
      <div  className=' logo'>
       {theme==='dark'? <img src={logo} className='logoIm'/>: null}
        </div>

      <nav className=" ">
        <ul className="flex">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/group">Group</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="">Skilles</a>
          </li>
        </ul>
      </nav>

      <button className="mode "
      onClick={()=>{
        localStorage.setItem("currentMode",theme==='dark'?'light':'dark');
        setTheme(localStorage.getItem("currentMode"));
      }}
      >
          {
            (theme==='dark')?(  <span className="icon-moon"></span>):(  <span className="icon-sun"></span>)
          }
      
      </button>
     {showModal && (
      <div className=" fixed">
       
       <ul className="modal ">
        <li ><button className="icon-close  " onClick={()=>setShowModal(false)}></button></li>
        <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/group">Group</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="">Skilles</a>
          </li>
       </ul>
    
   </div>)}
    </header>
  );
}
