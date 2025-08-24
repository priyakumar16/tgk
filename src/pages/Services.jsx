import React from 'react'
import email from'../assets/memail.jpg'
import mail from'../assets/mmail.jpg'
import social from'../assets/msocial.jpg'
import whatsapp from'../assets/mwhatsapp.jpg'
import { motion } from "framer-motion";

const service = [
  {
    "id" : "1",
    "img" : social,
    "title" : "Social Media Marketing",
    "desc" : "Gain Maximum Impressions and sales for your brand."
  },
  {
    "id" : "2",
    "img" :mail,
    "title" : "Direct Mail Marketing",
    "desc" : "Traditional marketing types shall work awesome."
  },
  {
    "id" : "3",
    "img" : email,
    "title" : "Email Marketing",
    "desc" : "Be a part of your customer’s journey."
  },
  {
    "id" : "4",
    "img" :whatsapp,
    "title" : "Whatsapp Marketing",
    "desc" : "Connect with your customers like never before"
  }
]

const servicepics = () => {
  return (
    <div className='grid md:grid-cols-4 gap-8'> 
    {service.map((item,i) => ( 
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.2 }}
                 viewport={{ once: true }}
      key={i}> 
        <div class="card bg-white dark:bg-transparent  h-full p-10 inset-shadow-xs hover:drop-shadow-2xl hover:drop-shadow-delay-200 rounded-2xl">
          <img class="card-img-top rounded-2xl dark:pb-5" src={item.img} alt="Title" />
          <div class="card-body">
            <h4 class="card-title  size-[20px] font-bold w-full">{item.title}</h4>
            <p class="card-text text-[14  px]/4.5 p-3">{item.desc}</p>
          </div>
        </div>
      </motion.div>
      
    ))
    }

    </div>
  )
}

export default servicepics