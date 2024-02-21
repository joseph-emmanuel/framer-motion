"use client";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
  const [rotate,setRotate] = useState(false);
  const [move,setMove] = useState(false);



  return (
   <div className="main">
    <div className="example-container">
      <motion.div
      // animate={{ rotate: rotate? 360 : 0 }}
      // onClick={()=>setRotate(!rotate)}
      // secondary
      // animate={{ x: move? 200 : -200 }}
      // transition={{ duration: 1, ease: "easeInOut",delay:0.5, type:"spring"}}
      // onClick={()=>setMove(!move)}
      // whileHover={{ scale: 1.1 }}
      // drag="x"
      // dragConstraints={{ left: 100 }}
      // animate={{rotate:[0,200,200,0],x:[0,200,200,0]}}
      // transition={{repeat:Infinity,duration:2}}
      ></motion.div>
      <Link href="/about">about</Link>
    </div>
   </div>
  );
}
