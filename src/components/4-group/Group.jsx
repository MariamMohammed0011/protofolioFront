import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import loading from "../../animations/loading2.json";
import Lottie from "lottie-react";
import "./Group.css";
// import { OurGroup } from "./OurGroup";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Group() {
  const lottieRef =useRef();

  const [isLoading, setIsLoading] = useState(true);

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
    
<div className='teaming'>


















  {isLoading ? (
      <Lottie 
        lottieRef={lottieRef} 
        onLoadedImages={() => { lottieRef.current.setSpeed(1) }}
        animationData={loading} 
        style={{ width: "300px" }}
      />
    ) :
     (
      <>
        {error && <div className="error-message">{error}</div>} 






<Swiper
    modules={[ Pagination, Autoplay]}
    spaceBetween={400} 
    slidesPerView={1}
    // navigation
    pagination={{ clickable: true, dynamicBullets: true }}
    // autoplay={{ delay: 2500, disableOnInteraction: false }}
    breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    }}
      className="slide-continer "
    >
 
 
 
 
 
 
 {
 
 
 
 
 group.map((user) => (
  <SwiperSlide key={user.id} className="slide-content">
       

<div className='cardd'>
<div className='image-content'>
<span className='overlay '></span>
<div className='card-image '>
            <Link to={`/member/${user.id}`} className="member-link">
              <img src={user.profile_picture} alt={user.name} className="card-img" />
             
            </Link>


</div>
</div>

  <div className='card-content '>
  <h1 className='name'>{user.name}</h1>
  <p className='description'>{user.specialization}</p>
  <button className='button-view-more'>view more</button>
</div>




</div>





            
        
       
      </SwiperSlide>
    ))
    
    
    
    
    
    }


      </Swiper>

</>







      )}









  </div>
 

  );
}
