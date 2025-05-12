import React, { useState ,useEffect,useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import loading from '../../animations/loading2.json'
import Lottie from "lottie-react";
import "./Group.css"; 
// import { OurGroup } from "./OurGroup";
import { Link } from "react-router-dom";
import axios from "axios";

const teamMembers = [
  {
    name: "Stefan Mikic",
    role: "Head of Development",
    image: "/images/stefan.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Marko Vukic",
    role: "Head of Development",
    image: "/images/marko.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Tamara Ristic",
    role: "Project Manager",
    image: "/images/tamara.jpg",
    linkedin: "#",
    github: "#",
  },
];
export default function Group() {
  
  const lottieRef =useRef();
  
  const [isLoading, setIsLoading] = useState(true);

  // const [group] = useState(OurGroup);
  const [group, setGroup] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://softify.website/protofolio/api/users")
      .then((response) => {
        if (response.data.data) {
          setGroup(response.data.data);
          setIsLoading(false); // تم التحميل بنجاح
        }
      })
      .catch((error) => {
        setError("Error fetching users: " + error.message);
        setIsLoading(false); // تم التحميل بنجاح
      });
  }, []);

  return (

<div className="team">
  {isLoading ? (
      <Lottie 
        lottieRef={lottieRef} 
        onLoadedImages={() => { lottieRef.current.setSpeed(1) }}
        animationData={loading} 
        style={{ width: "300px" }}
      />
    ) : (
      <>
        {error && <div className="error-message">{error}</div>}

{/* 
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
            
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper> */}

  <div className="team-section">
      <h2 className="team-title">Our experienced team</h2>
      <p className="team-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamMembers.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className="card">
              <img className="avatar" src={member.image} alt={member.name} />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="social-icons">
                <a href={member.linkedin}><i className="fab fa-linkedin"></i></a>
                <a href={member.github}><i className="fab fa-github"></i></a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>



  
  </>
  )}
</div>
  );
}
