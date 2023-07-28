import './App.css'
import Navbar from './Components/Navbar'
import Frames from './Components/frames'
import Project from './Components/Projects'
import Aboutme from './Components/Aboutme'
import Footer from './Components/Footer'
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Frames></Frames>
      <Project></Project>
      <Aboutme></Aboutme>
      <Footer></Footer>
    </>
  )
}