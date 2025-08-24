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
         <div className="absolute z-1">
                  <svg className='-m-10 top-0 items-center right-0 animate-spin-ease  ' xmlns="http://www.w3.org/2000/svg" width="156.077" height="150.803" viewBox="0 0 156.077 150.803"><g transform="matrix(-0.035, 0.999, -0.999, -0.035, 217.34, -325.115)"><path d="M449.249,63.233q-.937-.756-1.892-1.476l-105.7,105.705c.481.636.971,1.267,1.476,1.891Z" transform="translate(3.222 3.221)" fill="#deedcd"></path><path d="M426.145,52.381c-.877-.26-1.758-.5-2.642-.726l-91.952,91.953c.227.883.466,1.765.725,2.641Z" transform="translate(0.503 0.503)" fill="#deedcd"></path><path d="M442.673,58.894q-1.047-.647-2.111-1.256L337.534,160.667q.609,1.062,1.255,2.112Z" transform="translate(2.113 2.113)" fill="#deedcd"></path><path d="M435.018,55.25q-1.169-.527-2.35-1.015L334.13,152.771q.487,1.182,1.017,2.35Z" transform="translate(1.197 1.197)" fill="#deedcd"></path><path d="M415.789,50.45q-1.5-.213-3-.364l-82.805,82.805c.1,1,.222,2,.366,3Z" transform="translate(0.08 0.08)" fill="#deedcd"></path><path d="M453.994,67.365c-.282-.282-.567-.556-.853-.831L346.429,173.246c.277.284.551.571.831.852s.569.556.853.831L454.825,68.217C454.548,67.933,454.275,67.646,453.994,67.365Z" transform="translate(4.507 4.507)" fill="#deedcd"></path><path d="M403.483,49.787q-1.765.038-3.527.16L329.842,120.06q-.12,1.763-.16,3.527Z" transform="translate(0 0)" fill="#deedcd"></path><path d="M331.12,108.245l57.021-57.021q-2.281.512-4.533,1.166l-51.321,51.321Q331.632,105.963,331.12,108.245Z" transform="translate(0.387 0.387)" fill="#deedcd"></path><path d="M464.076,114.067q.12-1.763.16-3.527l-73.8,73.8q1.767-.038,3.527-.159Z" transform="translate(16.35 16.35)" fill="#deedcd"></path><path d="M466.483,103.781c-.1-1-.222-2-.364-3l-85.444,85.443c1,.142,2,.261,3,.364Z" transform="translate(13.723 13.723)" fill="#deedcd"></path><path d="M364.592,58a76.048,76.048,0,0,0-26.7,26.7Z" transform="translate(2.21 2.209)" fill="#deedcd"></path><path d="M458.074,126.857q.653-2.252,1.166-4.533l-57.022,57.021q2.281-.512,4.535-1.166Z" transform="translate(19.521 19.521)" fill="#deedcd"></path><path d="M419.339,166.143a76.058,76.058,0,0,0,26.7-26.7Z" transform="translate(24.129 24.129)" fill="#deedcd"></path><path d="M463.029,80.106q-.609-1.062-1.255-2.112L357.89,181.878q1.047.647,2.112,1.256Z" transform="translate(7.591 7.591)" fill="#deedcd"></path><path d="M459.431,73.831q-.722-.954-1.475-1.891L351.836,178.06q.935.756,1.891,1.476Z" transform="translate(5.962 5.962)" fill="#deedcd"></path><path d="M466.776,94.928c-.227-.883-.466-1.765-.725-2.641l-93.87,93.868c.877.26,1.758.5,2.642.726Z" transform="translate(11.438 11.438)" fill="#deedcd"></path><path d="M465.532,87.1q-.485-1.182-1.015-2.352L364.644,184.62q1.169.527,2.352,1.015Z" transform="translate(9.409 9.409)" fill="#deedcd"></path></g></svg>
                  </div>
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