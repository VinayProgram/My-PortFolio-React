import '../App.css'
import { useState } from 'react'
export default function Frames() {
  const [video, changevideo] = useState("https://www.youtube.com/embed/mR_VJXJ9rJY")
  const videoupdate = () => {
    if (video === 'https://www.youtube.com/embed/mR_VJXJ9rJY') {
      changevideo("https://www.youtube.com/embed/vwHOMv6JNPM")
    }
    else if (video === "https://www.youtube.com/embed/vwHOMv6JNPM") {
      changevideo("https://www.youtube.com/embed/QqM7I3Sszws")
    }
    else if (video === "https://www.youtube.com/embed/QqM7I3Sszws") {
      changevideo("https://www.youtube.com/embed/6LPuEqLhdsg")
    }
    else {
      changevideo('https://www.youtube.com/embed/mR_VJXJ9rJY')
    }

  }

  return (
    <div className='videohover' style={{ margin: "4vw" }}>
<br></br>
      <h5 style={{color:"white"}} className='Fontanimate'>My Intro To React and Nodejs</h5>
      <br></br>
      <iframe src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ height: "30vh", width: "90vw", borderRadius: "1rem" }}></iframe>
      <center>
      <button id='buttonchange' style={{ borderRadius: "0.5rem", border: "0,0,none",justifyContent:'center',backgroundColor:'black',color:'white'}} onClick={videoupdate}
      >Change Video</button></center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}