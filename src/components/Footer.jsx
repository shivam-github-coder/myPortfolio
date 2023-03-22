import React from 'react'
import { motion } from "framer-motion";
import { Box, Grid, Typography } from '@mui/material';

function Footer() {
    const cardVariants = {
        offscreen: {
          x: 500
        },
        onscreen: {
          x: 0,
          rotate: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };
  return (
    <Grid container  id='More' className='px-5' style={{backgroundColor:"#F6F6F6",height:300}}>
      <Grid item xs={12} justifyContent="center" alignItems="center" display="flex" direction="column">
        
        <Typography variant='h5' className='py-3'><span className='text-danger'>Shivam Kumar</span> Portfolio</Typography >
        <Typography variant='subtitle1' className='text-center w-75' style={{fontSize:15}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
        <Box className="d-flex mt-5">
            <motion.div
            variants={cardVariants}
            whileInView="onscreen"
              initial="offscreen"
              
              className="px-2 py-1 pb-2"
              style={{
                border: "2px solid gray",
                borderRadius: "10px",
                marginRight: 10,
              }}
            >
              <img
                width={20}
                src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"
              />
            </motion.div>
            <motion.div
            variants={cardVariants}
            whileInView="onscreen"
              initial="offscreen"
              
              className="px-2 py-1 pb-2"
              style={{
                border: "2px solid gray",
                borderRadius: "10px",
                marginRight: 10,
              }}
            >
              <img
                width={20}
                src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
              />
            </motion.div>
            <motion.div
            variants={cardVariants}
            whileInView="onscreen"
              initial="offscreen"
              
              className="px-2 py-1 pb-2"
              style={{
                border: "2px solid gray",
                borderRadius: "10px",
                marginRight: 10,
              }}
            >
              <img
                width={20}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
              />
            </motion.div>
            <motion.div
            variants={cardVariants}
            whileInView="onscreen"
              initial="offscreen"
              
              className="px-2 py-1 pb-2"
              style={{
                border: "2px solid gray",
                borderRadius: "10px",
                marginRight: 10,
              }}
            >
              <img
                width={20}
                src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png"
              />
            </motion.div>
            </Box>
          </Grid>
    </Grid>
  )
}

export default Footer