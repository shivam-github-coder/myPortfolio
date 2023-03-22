import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Grid } from '@mui/material';

function App() {
const [ScrollToHideShow, setScrollToHideShow] = useState(false);

document.addEventListener("scroll",(e) =>window.scrollY > 100 ? setScrollToHideShow(true) : setScrollToHideShow(false))
  
  return (
    <Grid container className="App">
      <Grid item xs={12}>
      {/* <motion.div initial={{x:1000,y:0}} animate={{x:-2000,y:0}} transition={{duration:.3}} style={{position:"absolute",top:0,right:0,bottom:0,left:0,backgroundColor:"rgb(196, 20, 20)",borderRadius:"50px"}}>

      </motion.div>
      <motion.div initial={{x:2000,y:0}} animate={{x:-2000,y:0}} transition={{duration:.5}} style={{position:"absolute",top:0,right:0,bottom:0,left:0,backgroundColor:"blue",borderRadius:"50px"}}>

      </motion.div>
      <motion.div initial={{x:3000,y:0}} animate={{x:-2000,y:0}} transition={{duration:.7}} style={{position:"absolute",top:0,right:0,bottom:0,left:0,backgroundColor:"#000",borderRadius:"50px"}}>

      </motion.div> */}
      <Header />
      <Main />
    {/* {ScrollToHideShow  &&  <div onClick={() => window.scrollTo(0,0)} style={{position:"fixed",right:40,bottom:40,backgroundColor:"rgb(196, 20, 20)",padding:10,borderRadius:25,boxShadow:"0px 0px 10px 2px #808080",cursor:"pointer"}}>
        <img width={30} src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/scroll-top-icon.png' />
      </div>} */}
      <Footer />
    </Grid>
    </Grid>
  );
}

export default App;
