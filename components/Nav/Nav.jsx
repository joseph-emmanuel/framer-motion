"use client";
import React, { useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

function Nav() {
    const {scrollYProgress} = useScroll();
    
   
    const svgVariants = {
        hidden: { rotate: 0 },
        visible: {
          rotate: [0, 200, 200, 0],
          transition: { repeat: Infinity, duration: 1 }
        }
      }
    //   const svgVariants2 = {
    //     hidden: { rotate: -180 },
    //     visible: {
    //       rotate: 0,
    //       transition: { duration: 1 }
    //     }
    //   }
      const pathVariants = {
        hidden: {
          opacity: 0,
          pathLength: 0
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: {
            duration: 1,
            ease: "easeInOut"
          }
        }
      }
  return (
    <div className="flex mb-6 fixed pb-7">
          <div className="mr-7"> <div className='w-6 text-white'>
          <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
            // variants={svgVariants2}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
              variants={pathVariants}
            />

            <motion.path
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
              variants={pathVariants}
            />
          </motion.svg>
        </div></div>
          <div className='w-full logotext text-white '>Pizza Joint</div>
        </div>
  )
}

export default Nav