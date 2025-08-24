import React from 'react'
import one from '../assets/one.webp'
import two from '../assets/two.webp'
import three from '../assets/three.webp'
import { motion } from "framer-motion";

const feature = [
    {
        title : "Sales Cycle",
        img: one,
        desc : " Reduce the sales cycle time of products/services."
    },
    {
        title : "Cmmunity ",
        img:two,
        desc : "Embrace the community behind the brand. "
    },
    {
        title : "Revenue ",
        img:three,
        desc : " Increase the revenue of clients through digital medium"
    }
]

const Howwework = () => {
  return (
        <div className="grid md:grid-cols-3 text-center gap-5 ">
            {feature.map((item,i)=>(
                 <motion.div  key={i} className='mt-10'
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.2 }}
                 viewport={{ once: true }}
                 >
                   <img src= {item.img} className='block m-auto py-3 w-1/2 ' />
                   <h2 className='font-bold text-[22px] text-black pt-3   '> {item.title} </h2>
                   <p className='px-15 pt-2'>{item.desc} </p>
                 </motion.div> 
            ))
            }
        </div>
  )
}

export default Howwework