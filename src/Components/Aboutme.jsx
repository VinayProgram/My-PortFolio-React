import '../App.css'
export default function About() {
  var audio = new Audio('record-mc.mp3')
  return (
    <div className="about-me">

      <h2 style={{ color: 'white' }} className='Fontanimate'>About Me</h2>
      <button style={{color:"white",backgroundColor:'black',borderRadius:'3em',height:"3em",width:'3em',margin:'10px'}} onClick={() => { audio.play() }}>►</button>
      <button style={{color:"white",backgroundColor:'Red',borderRadius:'3em',height:"3em",width:'3em',margin:'10px'}} onClick={() => { audio.pause() }}>▬</button>
      <p>
        Hi there! I'm Vinay Tandale, a passionate web developer and programmer. I love building
        beautiful and user-friendly websites using modern technologies like
        React, HTML5, CSS3, and JavaScript. My journey into the world of web
        development started on January 1, 2023. At that time, I was a commerce student with little coding experience, but my passion for web development led me to dive headfirst into learning frontend and backend technologies.
      </p>
      <p>
        Over a few months of dedicated learning, I gained expertise in web development, both on the frontend and backend. I now create beautiful websites with robust backend solutions using technologies like Node.js and databases. It's been an exciting and fulfilling journey so far, and I'm always eager to take on new challenges and build innovative projects.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors. I believe in continuous learning and strive to stay up-to-date with the latest trends and advancements in the web development world.
      </p>
      <p>
        Feel free to reach out to me through 7666949043 - Vinaytandale@gmail.com
        and let's create something amazing together!
      </p>
      <br></br>
      <h5>VinayTandale@gmail.com</h5>
      <h5>+91 7666949043</h5>
    </div>
  )
}