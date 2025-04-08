import React, { useEffect, useState } from "react";
import "../3-main/Main.css";
// import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "motion/react";
export default function Main() {
  
  
  const [currentActive, setCurrentActive] = useState("all");
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://protofolioback-production.up.railway.app/api/projects", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data) { 
          setProjects(data.data);
          setAllProjects(data.data);
        }
      })
      .catch((error) => {
        setError("Error fetching projects: " + error.message);
      });
}, []);


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


  // const handleClick = (buttonCategory) => {
  //   setCurrentActive(buttonCategory);
  //   const newArray = projects.filter((item) => {
  //     const zzz = item.category.find((cat) => {
  //       return cat === buttonCategory;
  //     });

  //     return zzz === buttonCategory;
  //   });

  //   setArr(newArray);
  // };



  return (
    // <main className="flex ">
    //   <section className=" flex  left-section">
    //     <button
    //       className={currentActive === "all" ? "active" : ""}
    //       onClick={() => {
    //         setCurrentActive("all");
    //         setArr(myProjects);
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
    //     {projects.map((item) => {
    //       return (
    //         <motion.article key={item.name} className="card  "
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
    <main className="flex">
      <section className="flex left-section">
        <button className={currentActive === "all" ? "active" : ""} onClick={() => handleClick("all")}>All Projects</button>
        <button className={currentActive === "css" ? "active" : ""} onClick={() => handleClick("css")}>HTML & CSS</button>
        <button className={currentActive === "flutter" ? "active" : ""} onClick={() => handleClick("flutter")}>Flutter</button>
        <button className={currentActive === "react" ? "active" : ""} onClick={() => handleClick("react")}>React</button>
      </section>

      <section className="flex right-section">
        {error && <div className="error-message">{error}</div>} {/* عرض الخطأ إذا وجد */}
        <AnimatePresence>
          {projects.map((item) => (
            <motion.article key={item.id} className="card"
              layout initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}>
              <img src={item.imgPath} width={240} alt={item.projectTitle} className="image-projects" />
              <div className="box" style={{ width: "240px" }}>
                <h1 className="title">{item.projectTitle}</h1>
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
        </AnimatePresence>
      </section>
    </main>
  );
}
