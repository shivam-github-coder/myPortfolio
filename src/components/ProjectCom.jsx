import React from 'react'
import "../App.css"
import { motion } from "framer-motion";

function ProjectCom({imgurl,name}) {
    const cardVariants = {
        offscreen: {
          y: 300
        },
        onscreen: {
          y: 50,
          rotate: -10,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

  return (
    <motion.div initial="offscreen"
    whileInView="onscreen" variants={cardVariants} className='MainCard' style={{position:"relative"}}>
        <img width={400} className="h-64" src={imgurl} />
        <div className='MainCardName'>
            <p>{name}</p>
        </div>
    </motion.div>
  )
}

export default ProjectCom