"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";



function About() {
  const svgVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [0, 200, 200, 0],
      transition: { repeat: Infinity, duration: 2 }
    }
  }
  const svgVariants2 = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 }
    }
  }
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div>
      <div>
        <div className='w-6 text-white'>
          <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
            variants={svgVariants2}
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
        </div>
        <div>
          {/* <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
            variants={svgVariants2}
            // variants={svgVariants2}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
              variants={pathVariants}
            />
            <path d="M17.7635 17.6811V7.82783H8.57894V9.93242H15.3412V15.4809H2.42229V2.18369H17.7635V0.0791016H0V17.6811H17.7635Z" fill="none"></path>

          </motion.svg> */}

        </div>



        {/* <motion.svg
        style={{ width: "80%", height: "80%" }}
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          d="M415,275Q422,310,417.5,354Q413,398,378,423Q343,448,299,423Q255,398,227.5,389.5Q200,381,151,401.5Q102,422,86,383.5Q70,345,65,309.5Q60,274,78.5,243.5Q97,213,87.5,176.5Q78,140,107.5,122Q137,104,160.5,74Q184,44,222,33Q260,22,293.5,43.5Q327,65,362,81Q397,97,386,142.5Q375,188,391.5,214Q408,240,415,275Z"
        />
      </motion.svg> */}

      </div>
      <Link href="../../pizzajoint">Pizza Joint</Link>
      {/* <Link href="path/insidePath">Inside path</Link> */}
    </div >
  )
}

export default About