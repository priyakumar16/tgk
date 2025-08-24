import React from 'react'
import Navbar from './src/Navbar'
import CustomCursor from './src/component/CustomCursor'
import hero from './src/assets/hero-4.webp'
import { motion } from "framer-motion";
import heroshape from './src/assets/hero-shape.webp'
import heroshapetwo from './src/assets/hero-shape-2.webp'
import star from './src/assets/hero-shape-3.webp'
import Howwework from './src/component/howwework';
import Services from './src/pages/Services.jsx';
import Work from './src/component/work';
import Footer from './src/Footer';


const Home = () => {
  return (
    <div>
      <CustomCursor />
      <Navbar /> 

      <section className="w-full hero-sec pt-16">
        <img src={heroshape} className='animate-pulse mt-10 duration-75 w-10 absolute -z-0' alt='shape' title='shape'/>
       <div className="container  items-center relative z-10 mx-auto  grid md:grid-cols-2 gap-10">
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="md:text-5xl font-extrabold mb-6 leading-tight">
           Customer <br />
           <span className="text-primary">Retention Is The</span> <br />
           Real Growth
          </h2>
          <p className="text-lg text-gray-600 mb-6 font-medium"> Marketing trends says, losing an existing client is equal to acquiring 5 new clients. Attention is the new gold mine in the digital marketing world. 
          </p>

          <button className="relative px-6 py-3 bg-primary text-white rounded-xl shadow-md hover:bg-secondary/90">
            Get Started
            <img src={star} className='animate-spin-ease w-7 absolute -right-10 -top-10'/>
          </button>
        </motion.div>
        <motion.img
          src={hero}
          alt="Hero"
          className="rounded-2xl md:p-25  "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
       </div>
      </section>

      <section id='about' className='mb-20'>
        <div className="container mx-auto text-center md:mt-15 px-10">
          <img src={heroshapetwo} title='shape' className='block float-right animate-spin-ease' />
          <span className='text-fourth border-2 p-1 px-2 rounded-2xl text-[14px]'> About Us </span>
           <h3 className="text-3xl font-extrabold py-3 ">How we Work </h3>
           <p className='font-normal '> This process sounded good to us; thus, our idea of a customer <br/>
             retention agency was born.  </p>

             <Howwework />

         </div>
      </section>

      <section id="services" className='bg-[#5749f612] pt-15 pb-20  '>
        <div className="container text-center  mx-auto ">
            <span className='text-fourth border-2 p-1 px-2 rounded-2xl text-[14px]'> What We Can Do For You </span>
            <h3 className="text-3xl font-extrabold py-3 mb-8 ">Services we can help you with </h3> 
            <Services />
        </div>
      </section>

      {/* Features Section */}
      <section id="work" className="bg-gray-50">
        <div className="container relative  mx-auto">
           <Work />
        </div>
        <div className="absolute">
          <svg className='bottom-0 float-left' xmlns="http://www.w3.org/2000/svg" width="156.077" height="150.803" viewBox="0 0 156.077 150.803"><g transform="matrix(-0.035, 0.999, -0.999, -0.035, 217.34, -325.115)"><path d="M449.249,63.233q-.937-.756-1.892-1.476l-105.7,105.705c.481.636.971,1.267,1.476,1.891Z" transform="translate(3.222 3.221)" fill="#fee7e7"/><path d="M426.145,52.381c-.877-.26-1.758-.5-2.642-.726l-91.952,91.953c.227.883.466,1.765.725,2.641Z" transform="translate(0.503 0.503)" fill="#fee7e7"/><path d="M442.673,58.894q-1.047-.647-2.111-1.256L337.534,160.667q.609,1.062,1.255,2.112Z" transform="translate(2.113 2.113)" fill="#fee7e7"/><path d="M435.018,55.25q-1.169-.527-2.35-1.015L334.13,152.771q.487,1.182,1.017,2.35Z" transform="translate(1.197 1.197)" fill="#fee7e7"/><path d="M415.789,50.45q-1.5-.213-3-.364l-82.805,82.805c.1,1,.222,2,.366,3Z" transform="translate(0.08 0.08)" fill="#fee7e7"/><path d="M453.994,67.365c-.282-.282-.567-.556-.853-.831L346.429,173.246c.277.284.551.571.831.852s.569.556.853.831L454.825,68.217C454.548,67.933,454.275,67.646,453.994,67.365Z" transform="translate(4.507 4.507)" fill="#fee7e7"/><path d="M403.483,49.787q-1.765.038-3.527.16L329.842,120.06q-.12,1.763-.16,3.527Z" transform="translate(0 0)" fill="#fee7e7"/><path d="M331.12,108.245l57.021-57.021q-2.281.512-4.533,1.166l-51.321,51.321Q331.632,105.963,331.12,108.245Z" transform="translate(0.387 0.387)" fill="#fee7e7"/><path d="M464.076,114.067q.12-1.763.16-3.527l-73.8,73.8q1.767-.038,3.527-.159Z" transform="translate(16.35 16.35)" fill="#fee7e7"/><path d="M466.483,103.781c-.1-1-.222-2-.364-3l-85.444,85.443c1,.142,2,.261,3,.364Z" transform="translate(13.723 13.723)" fill="#fee7e7"/><path d="M364.592,58a76.048,76.048,0,0,0-26.7,26.7Z" transform="translate(2.21 2.209)" fill="#fee7e7"/><path d="M458.074,126.857q.653-2.252,1.166-4.533l-57.022,57.021q2.281-.512,4.535-1.166Z" transform="translate(19.521 19.521)" fill="#fee7e7"/><path d="M419.339,166.143a76.058,76.058,0,0,0,26.7-26.7Z" transform="translate(24.129 24.129)" fill="#fee7e7"/><path d="M463.029,80.106q-.609-1.062-1.255-2.112L357.89,181.878q1.047.647,2.112,1.256Z" transform="translate(7.591 7.591)" fill="#fee7e7"/><path d="M459.431,73.831q-.722-.954-1.475-1.891L351.836,178.06q.935.756,1.891,1.476Z" transform="translate(5.962 5.962)" fill="#fee7e7"/><path d="M466.776,94.928c-.227-.883-.466-1.765-.725-2.641l-93.87,93.868c.877.26,1.758.5,2.642.726Z" transform="translate(11.438 11.438)" fill="#fee7e7"/><path d="M465.532,87.1q-.485-1.182-1.015-2.352L364.644,184.62q1.169.527,2.352,1.015Z" transform="translate(9.409 9.409)" fill="#fee7e7"/></g></svg>
        </div>
      </section>

      <section id='contact'>
        <Footer />
      </section>
    </div>
  )
}

export default Home