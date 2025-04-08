import React, { useState, useEffect,useRef} from "react";
import { useParams } from "react-router-dom";
import { OurGroup } from "../4-group/OurGroup"; 
import Lottie from "lottie-react";
import { AnimatePresence, motion } from "motion/react";
import pro from "../../animations/pro.json"; 
import "./MemberProfile.css"; 
import Contact from "../5-contact/Contact";
import Footer from "../6-footer/Footer";
import Group from "../4-group/Group";
import Main from "../3-main/Main";
import hero from '../../animations/hero.json'
export default function MemberProfile() {
  
  const [currentActive, setCurrentActive] = useState("all");
 
const [allProjects, setAllProjects] = useState([]);
  // const { id } = useParams(); 
  // const member = OurGroup.find((member) => member.id === parseInt(id));
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [projects, setProjects] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const lottieRef =useRef();
  // if (!member) {
  //   return <h1>Member Not Found</h1>;
  // }
  useEffect(() => {
    fetch(`https://protofolioback-production.up.railway.app/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMember(data.data);
          setProjects(data.data.projects);
        }
      })
      .catch((error) => console.error("Error fetching member data:", error));
  }, [id]);

  if (!member) {
    return <h1>Member Not Found</h1>;
  }

  // const memberProjects=member.projects;
  // const [arr, setArr] = useState(memberProjects);
  // const filterProjects = (category) => {
  //   setCurrentCategory(category);
  //   if (category === "all") {
  //     setProjects(member.projects);
  //   } else {
  //     setProjects(member.projects.filter((p) => p.category.includes(category)));
  //   }
  // };

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    if (buttonCategory === "all") {
      setProjects(allProjects);
    } else {
      const filteredProjects = allProjects.filter((item) =>
        item.categories.some((cat) => cat.name === buttonCategory)
      );
      setProjects(filteredProjects);
    }
  };

  
  return (
    // <div className="member">
    // <section className=" hero flex" >
    //   <div className="left-section ">
    //     <div className="parent-avatar flex">
    //       <motion.img
    //         src={member.imagePath} 
    //         initial={{ transform: "scale(0)" }}
    //         animate={{ transform: "scale(1.1)" }}
    //         transition={{ type: "spring", stiffness: 100, damping: 6 }}
    //         className="user-image avatar"
    //       />
    //       <div className="icon-verified"></div>
    //     </div>
    //     <motion.h1
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 2 }}
    //       className="title"
    //     >
    //       {member.name} - {member.work} 
    //     </motion.h1>
    //     <p className="subtitle">
    //       {member.bio || "This member is part of our amazing team!"}
    //     </p>
    //     <div className="social-icons flex">
    //       <div className="icon icon-facebook"></div>
    //       <div className="icon icon-linkedin2"></div>
    //       <div className="icon icon-twitter"></div>
    //       <div className="icon icon-github"></div>
    //     </div>
    //   </div>
    //   <div className="right-section animation" >
    //     <Lottie animationData={pro} style={{ width: "500px" }} />
    //   </div>
      
     
    // </section>
    // <div className="divider" />
  
    // <main className="flex ">
    //   <section className=" flex  left-section">
    //     <button
    //       className={currentActive === "all" ? "active" : ""}
    //       onClick={() => {
    //         setCurrentActive("all");
    //         setArr(memberProjects);
    //       }}
    //     >
    //       All Projects
    //     </button>
    //     <button
    //       className={currentActive === "css" ? "active" : ""}
    //       onClick={() => {
    //         handleClick("css");
    //       }}
    //     >
    //       {" "}
    //       HTML & CSS
    //     </button>
    //     <button
    //       className={currentActive === "flutter" ? "active" : ""}
    //       onClick={() => {
    //         handleClick("flutter");
    //       }}
    //     >
    //       {" "}
    //       Flutter
    //     </button>
    //     <button
    //       className={currentActive === "react" ? "active" : ""}
    //       onClick={() => {
    //         handleClick("react");
    //       }}
    //     >
    //       {" "}
    //       React & MUI
    //     </button>
    //     <button
    //       className={currentActive === "node" ? "active" : ""}
    //       onClick={() => {
    //         handleClick("node");
    //       }}
    //     >
    //       {" "}
    //       Node & JavaScript
    //     </button>
    //   </section>
    //   <section className=" flex right-section  ">
    //     <AnimatePresence>
    //     {arr.map((item) => {
    //       return (
    //         <motion.article key={item.imgPath} className="card  "
    //         layout
    //         initial={{transform:"scale(0)"}}
    //         animate={{transform:"scale(1)"}}
    //         transition={{type:"spring", damping:8,stiffness:50}}
    //         >
            
    //           <img
    //             src={item.imgPath}
    //            width={240}
    //             alt=""
    //             className="image-projects "
    //           />
             
            
    //           <div className="box  " 
    //           style={{ width: "240px" }}
    //           >
    //             <h1 className="title">{item.projectTitle}</h1>
    //             <p className="subtitle">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Tenetur
    //             </p>
    //             <div className="flex icons ">
    //               <div 
    //               // style={{ gap: "11px" }}
    //                className="flex">
    //                 <div className="icon-link"></div>
    //                 <div className="icon-github"></div>
    //               </div>

    //               <a href="" className="link flex">
    //                 more
    //                 <span
    //                   style={{ alignSelf: "end" }}
    //                   className="icon-arrow-right2"
    //                 ></span>
    //               </a>
    //             </div>
    //           </div>
    //         </motion.article>
    //       );
    //     })}
    //     </AnimatePresence>
      
    //   </section>
    // </main>
  

    
    
    // <div className="divider" />
    // <Contact/>
    // <div className="divider" />
    // <Footer/>
    // </div>
    <div className="member">
      <section className="hero flex">
        <div className="left-section">
          <motion.img
            src={member.profile_picture}
            initial={{ scale: 0 }}
            animate={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 6 }}
            className="user-image avatar"
            alt={member.name}
          />
          <motion.h1 className="title">{member.name} - {member.specialization}</motion.h1>
          <p className="subtitle">{member.bio || "This member is part of our amazing team!"}</p>
          <div className="social-icons flex">
            <div className="icon icon-facebook"></div>
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
     
      <div className="divider" />

      <main className="flex">
      <section className="flex left-section">
        <button className={currentActive === "all" ? "active" : ""} onClick={() => handleClick("all")}>All Projects</button>
        <button className={currentActive === "css" ? "active" : ""} onClick={() => handleClick("css")}>HTML & CSS</button>
        <button className={currentActive === "flutter" ? "active" : ""} onClick={() => handleClick("flutter")}>Flutter</button>
        <button className={currentActive === "react" ? "active" : ""} onClick={() => handleClick("react")}>React</button>
      </section>

        <section className="right-section flex">
            {projects.map((project) => (
                      <motion.article key={project.id} className="card"
                        layout initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{ type: "spring", damping: 8, stiffness: 50 }}>
                         <img src={project.imgPath} alt={project.projectTitle} width={240} className="image-projects" />
                         <div className="box" style={{ width: "240px" }}>
                         <h1 className="title">{project.projectTitle}</h1>
              
                          <p className="subtitle">Lorem ipsum dolor sit amet consectetur.</p>
                          <div className="flex icons">
                            <div className="flex">
                              <div className="icon-link"></div>
                              <div className="icon-github"></div>
                            </div>
                            <a href="#" className="link flex">more <span className="icon-arrow-right2"></span></a>
                          </div>
                        </div>
                      </motion.article>
                    ))}
          
        </section>
      </main>

      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
    </div>
    
  );
}
