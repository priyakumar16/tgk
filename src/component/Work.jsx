import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import work1 from'../assets/work1.jpg'
import work2 from'../assets/work2.jpg'
import work3 from'../assets/work3.jpg'
import work4 from'../assets/work4.jpg'  
const projects = [
  {
    title: "Creative Agency",
    img: work1,
  },
  {
    title: "Digital Marketing",
    img: work2,
  },
  {
    title: "Social Engagement",
    img: work3,
  },
  {
    title: "Plan Management",
    img: work4,
  },
];

export default function Work() {
  return (
     <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 py-16 items-center">      
      {/* Left Column - Text */}
      <div className="col-span-1">
        <p className='text-fourth border-2 p-1 px-2 rounded-2xl text-[14px] w-fit'> Portfolio </p>
        <h2 className="text-4xl font-bold mt-4 text-left">Our Works</h2>
        <p className="text-gray-600 mt-4 text-left">
          We design professional looking yet simple Logo. Our designs are search engine and user friendly.
          Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.
        </p>
      </div>

      {/* Right Column - Carousel */}
      <div className="col-span-2">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="group relative  overflow-hidden rounded-xl shadow-lg">
                <img
                  src={p.img} 
                  alt={p.title}
                  className="w-auto h-auto transition-transform duration-500 group-hover:scale-110"
                /> 
              </div>
              <div className="relative bottom-0  text-primary p-4 ">
                  <h3 className="font-bold text-center">{p.title}</h3>
                 </div>
             </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
