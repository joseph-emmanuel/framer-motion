"use client";
import React from 'react'
import { useRef } from "react";
import { motion,useScroll } from 'framer-motion'
// import Box from "@components/Nav/Box"
import Box from '../../components/Nav/Box'
import Square from '../../components/Nav/Square'
import PreogressBar from '../../components/Nav/PreogressBar'

function pizzaHome() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });  
   
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
    const icon = {
      hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)"
      }
    };

  return (
    <div>
     
{/* <div className='fixed top-[50%] left-[30%]'>      <motion.svg className="w-[200px] stroke-black stroke-[5px] overflow-visible  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
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
          </motion.svg></div> */}


          {/* <div>  

          <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
          </div> */}
{/* 
<motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      /> */}

      <PreogressBar >
        <div ref={ref} className='top-[200px] mainLogo'>
        <figure className="progress">
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z" pathLength="1" className="bg" />
         <path
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
              pathLength="1" className="bg"
            />
        <motion.path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          pathLength="0"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.path
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          pathLength="0"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
        </figure>
      </div>
      </PreogressBar>
      <div className='flex justify-center items-center'><Square /></div>
      <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div>
<motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item max-w-[100px]"
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        // initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        
        }}
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      />
    </motion.svg>
</div>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

       
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      {/* <Box /> */}


      {/* <Box /> */}
    </div>
  )
}

export default pizzaHome