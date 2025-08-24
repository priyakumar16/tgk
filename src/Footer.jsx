import React from "react"; 
import fLogo from './assets/flogo.svg'
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import heroshape from './assets/hero-shape.webp'


export default function Footer() {
  return (
    <>
      <img src={heroshape} className='animate-pulse mt-10 duration-75 w-10 absolute -z-0' alt='shape' title='shape'/>

    <div className="container pt-20 mx-auto text-center">
      
      <div class="card ">
            <div class="card-body">
                  <span className='text-fourth p-1 px-2 rounded-2xl text-[14px]'> Join Our Community  </span>
              <h3 className="text-3xl font-extrabold py-1 ">Subscribe To Our Newsletter </h3>
              <p className='font-normal '>You must be interested in marketing trends and insights we know!  </p>
                <div class="mb-3">
                  <form action="" method="post" className="text-center sm:flex">
                    <div className="mt-5 md:border md:border-secondary md:block mx-auto md:w-fit px-5 pr-1 py-1  rounded-4xl ">
                      <input
                        type="email"
                        className="form-control md:pl-5 rounded-4xl mr-10 sm:mb-3"
                        name=""
                        id=""
                        aria-describedby="emailHelpId"
                        placeholder="Enter your Email-Id" required
                      />
                    <button type="submit" className="bg-secondary hover:bg-primary text-white text-[20px]  px-10 py-1 rounded-3xl "> Submit </button>
                    </div>
                  </form>
                </div>
            </div>
          </div>
    </div>
    
    <footer className="mx-auto relative text-white py-16 overflow-hidden">
      
      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble bg-secondary"></div>
        <div className="bubble bg-primary"></div>
        <div className="bubble bg-white"></div>
        <div className="bubble bg-fourth"></div>
        <div className="bubble bg-primary"></div>
      </div> 

      {/* Footer Content */}
      
       
      
      <div className="relative container z-10  mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pt-30">

          <div className="logo">
            <img className="w-20" src={fLogo} alt="logo" title="The Growth Kitchen" />
            <p>At The Growth Kitchen, We believe in creating impactful content strategies to retain your customers and grow your organization with valuable insights.</p>
          </div>

          <div className="fmenu">
            <div class="card">
              <div class="card-header font-extrabold">Services</div>
              <div class="card-body">
                  <ul class="card-title">
                    <li>Social Media Marketing </li>
                    <li> Email Marketing </li> 
                    <li> Direct mail Marketing </li> 
                    <li> WhatsApp Marketing</li>
                  </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Let’s Talk</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg" />
                <span>vigneshsmk@thegrowthkitchen.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-lg" />
                <span>+91 9791531613</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

           {/* Office Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Office Address</h3>
            <div className="flex items-start gap-2 text-sm">
              <MdLocationOn className="text-lg mt-1" />
              <p>
                Discover Work Space, <br />
                Nava India, <br />
                Coimbatore - 641004
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
    
  );
}
