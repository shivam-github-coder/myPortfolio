import { Box, Grid } from '@mui/material';
import React from 'react'

import url from "./Shivam Kumar Resume 1.pdf"

function Header() {
  const menu = ["Home","Projects","About","More"];
  function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  return (
    <Grid container style={{backgroundColor:"#F6F6F6"}} className="px-10 py-3">
      <Grid item xs={6}>
      <img src='https://pngimage.net/wp-content/uploads/2018/06/portfolio-png-3.png' width={100} />
      </Grid>
      <Grid item xs={6} sx={{display:{lg:"flex",xs:"none"},justifyContent:"end",alignItems:"center"}}>
      {
        menu.map((e,i) => <a key={i}  href={`#${e}`} className='MenuItem' style={{marginRight:50,cursor:"pointer",fontWeight:600,letterSpacing:1}}>{e}</a>)
      }
      <button className='btn btn-outline-success btn-sm' onClick={() => download(url)}>Download Resume</button>
      </Grid>
      <Grid item xs={6}  sx={{display:{lg:"none",xs:"flex"},justifyContent:"end",alignItems:"center"}}>
        <img width={25} src="https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png" />
      </Grid>
    </Grid>
  )
}

export default Header