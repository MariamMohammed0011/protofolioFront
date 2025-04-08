import React, { useState ,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Group.css"; 
// import { OurGroup } from "./OurGroup";
import { Link } from "react-router-dom";

export default function Group() {
  // const [group] = useState(OurGroup);
  const [group, setGroup] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://protofolioback-production.up.railway.app/api/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setGroup(data.data);
        }
      })
      .catch((error) => {
        setError("Error fetching users: " + error.message);
      });
  }, []);


  return (
    // <div className="team">
    //   <Swiper
    //     modules={[Navigation, Pagination, Autoplay]}
    //     spaceBetween={400} 
    //     slidesPerView={1}
    //     navigation
    //     pagination={{ clickable: true, dynamicBullets: true }}
    //     autoplay={{ delay: 2500, disableOnInteraction: false }}
    //     breakpoints={{
    //       640: { slidesPerView: 1, spaceBetween: 20 },
    //       768: { slidesPerView: 2, spaceBetween: 30 },
    //       1024: { slidesPerView: 3, spaceBetween: 30 },
    //     }}
    //     className="swiper-container"
    //   >
    //     {group.map((item, index) => (
    //       <SwiperSlide key={index} className="swiper-slide">
    //         <div className="card-list">
            
               
    //           <div className="card-item">
              
    //           <Link to={`/member/${item.id}`} className="member-link">
    //             <img src={item.imagePath} alt={item.name} className="user-image" />
    //             <h2 className="user-name">{item.name}</h2>
    //             <p className="user-profession">{item.work}</p>
    //             </Link>
    //             <button className="message-button">Message</button>
    //           </div>
    //           </div>
              
           
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
 
<div className="team">
  {error && <div className="error-message">{error}</div>} {/* عرض رسالة الخطأ إن وجدت */}
   <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={400} 
    slidesPerView={1}
    navigation
    pagination={{ clickable: true, dynamicBullets: true }}
    // autoplay={{ delay: 2500, disableOnInteraction: false }}
    breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    }}
      className="swiper-container"
    >
    {group.map((user) => (
      <SwiperSlide key={user.id} className="swiper-slide">
        <div className="card-list">
          <div className="card-item">
            <Link to={`/member/${user.id}`} className="member-link">
              <img src={user.profile_picture} alt={user.name} className="user-image" />
              <h2 className="user-name">{user.name}</h2>
              <p className="user-profession">{user.specialization}</p>
            </Link>
            <button className="message-button">Message</button>
            {/* <div className="projects">
              <h3>Projects:</h3>
              <ul>
                {user.projects.map((project) => (
                  <li key={project.id}>
                    <img src={project.imgPath} alt={project.projectTitle} width={50} />
                    {project.projectTitle}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  );
}

 // <div className="team ">
    //   <div className="intro-team ">
    //     <h1 className="title  ">The Team Members Are:</h1>
    //     <p className="subtitle">
    //       Lorem ipsum dolor sit amet maiores nemo, aspernatur laborum dicta.
    //       Amet a esse cum nemo molestiae?
    //     </p>
    //     <span className="line"></span>
    //     <div></div>
    //   </div>
    //   <section className="members  ">
    //     {group.map((item) => {
    //       return (
    //         <div className="box" data-color={item.background}>
    //           <div className="imgBox">
    //             <img src={item.imagePath} />
    //           </div>
    //           <div className="glass  ">
    //             <h3>
    //              {item.name}
    //               <br />
    //               <span>{item.work}</span>
    //             </h3>

    //             <ul className="flex ">
    //               <li>
    //                 <a href="" className="icon-github" ></a>
    //               </li>
    //               <li>
    //                 <a href="" className="icon-twitter" ></a>
    //               </li>
    //               <li>
    //                 <a href="" className="icon-linkedin2" ></a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       );
    //     })}

       
    //   </section>