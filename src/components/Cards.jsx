import React from 'react'
import { motion } from "framer-motion";

const Cards = ({title, desc}) => {
  return (
    <motion.div 
       initial={{ opacity: 0, y: 120}}
            whileInView={{
              opacity: 1,
              y: 0
            } }
            viewport={{once: true}}
            transition={{duration:1}}
      className="shadow-md shadow-gray-500 border flex flex-col px-4 py-8 gap-3 rounded-sm ">
        <h1 className='text-black text-xl font-bold '>{title}</h1>
        <p className='text-black text-sm'>{desc}</p>

    </motion.div>
  )
}

export default Cards