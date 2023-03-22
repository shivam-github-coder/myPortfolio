import React from "react";
import Typed from "typed.js";
import { motion, useScroll } from "framer-motion";
import ProjectCom from "./ProjectCom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Grid, Typography } from "@mui/material";

function Main() {
  const el = React.useRef(null);

  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web developer",
        "Meterial UI",
        "React Js &amp; Redux",
        "Tailwind CSS",
        "Next JS",
      ],
      loop: true,
      typeSpeed: 50,
      cursorChar: "|",
      fontSize: "50px",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const items = [
    "https://www.freeiconspng.com/thumbs/html5-icon/html5-icon-1.png",
    "https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png",
    "https://www.kindpng.com/picc/m/656-6568580_nodejs-logo-png-transparent-node-js-icon-png.png",
    "https://assets.stickpng.com/images/58481021cef1014c0b5e494b.png",
  ];

  const cardVariants = {
    offscreen: {
      x: -550,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <Grid container>
      <Grid item xs={12}>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Grid container className="h-screen">
        <Grid item xs={12} md={12} lg={6} className="flex flex-col md:justify-center sm:justify-start sm:px-5 bg-opacity-50 pt-36" sx={{background:{xs:`url("https://cdn.autonomous.ai/static/upload/images/common/upload/20210805/6-Hybrid-Remote-Work-Models-for-Businesses-to-Consider_11f4e4eb2c56.jpg") no-repeat center center / cover`,lg:"url()"},}}>
          <Box>
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.5,
                x: { duration: 1 },
                default: { ease: "linear" },
              }}
            >
              <h4 className="" style={{ fontSize: 70 }}>
                Hello World<span className="text-danger">!</span>
              </h4>
            </motion.div>
            <Typography variant="h5">
              I am
              <span
                className="text-danger"
                style={{ letterSpacing: 3, paddingLeft: 10 }}
              >
                Shivam Kumar
              </span>
            </Typography>
            <span
              style={{ fontSize: 45 }}
              className="text-success fw-bold"
              ref={el}
            />
            {/* <h1 style={{fontSize:45}} className="text-primary">Web Developer</h1> */}
            <Box className="d-flex mt-5">
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1 }}
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
                initial={{ x: -800 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.7 }}
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
                initial={{ x: -800 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.9 }}
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
                initial={{ x: -800 }}
                animate={{ x: 0 }}
                transition={{ delay: 1 }}
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
          </Box>
        </Grid>
        <Grid item  xs={12} md={12} lg={6} className="flex flex-col justify-center pt-20" sx={{display:{xs:"none",lg:"flex"}}}>
          <motion.div
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <img
              style={{
                borderRadius: "250px 0px 250px 250px",
                boxShadow: "40px 40px 45px -27px",
              }}
              src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"
            />
          </motion.div>
        </Grid>
      </Grid>
      <Grid item xs={12} id="Projects">
        <p className="text-center mt-5" style={{ fontSize: 30 }}>
          Projects
        </p>
        <hr className=" w-25 mx-auto" />
      </Grid>
      <Grid item xs={12} className="">
              <Grid container className="px-5  ">
              <Grid item xs={12} md={6} lg={4} className="py-5 flex justify-center items-center">
        <ProjectCom
          imgurl="https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b"
          name="E-commerce"
        />

              </Grid>
              <Grid item xs={12} md={6} lg={4} className="py-5 flex justify-center items-center">

        <ProjectCom
          imgurl="https://i.ytimg.com/vi/27JtRAI3QO8/maxresdefault.jpg"
          name="Portfolio"
        />
              </Grid>
              <Grid item xs={12} md={12} lg={4} className="py-5 flex justify-center items-center">
        <ProjectCom
          imgurl="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg"
          name="Dashboard"
        />

              </Grid>
              </Grid>

      </Grid>
      <Grid item xs={12} id="About">
        <p className="text-center mt-5" style={{ fontSize: 30 }}>
          About
        </p>
        <hr className=" w-25 mx-auto" />
      </Grid>
      <Grid item xs={12}>
        <motion.p
          variants={cardVariants}
          whileInView="onscreen"
          initial="offscreen"
          style={{ letterSpacing: 1.5 }}
          className="mx-5 px-5 text-center py-5"
        >
          A self-introduction will help your acquaintances learn more about your
          experience and skills. To capture the audience's attention and build
          long-lasting relationships, it is essential to provide an engaging
          introduction. Having a self-introduction sample is useful when you
          meet an interviewer, new colleague, supervisor, mentor or a new
          connection. In this article, we will discuss the definition of
          self-introduction, explore the steps and tips required to write an
          introduction and read about five examples of introducing yourself in
          different situations.
          <br />
          <br />
          <br />-<b>Shivam Kumar</b>
        </motion.p>
      </Grid>
      <Grid item xs={12}>
        <p className="text-center mt-5" style={{ fontSize: 30 }}>
          Services
        </p>
        <hr className=" w-25 mx-auto" />
      </Grid>
      <Grid item xs={12} className="my-5 py-5">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1000}
          additionalTransfrom={0}
          infinite={true}
          centerMode={true}
          transitionDuration={0}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {items.map((e,i) => (
            <Box key={i} className="">
              <img className="" width={100} src={e} />
            </Box>
          ))}
        </Carousel>
      </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
