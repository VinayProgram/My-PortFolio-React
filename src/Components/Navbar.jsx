import '../App.css'
export default function Navbar() {
  return (
    <div style={{ display: "flex", backgroundColor: 'black',height: "8vh" }} className='navbarself'>
      <div style={{ justifyContent: 'left', width: '40vw', marginRight: '1rem', marginLeft: '10px' }}>
        <h5 className="effect" >Program Vinay</h5>
      </div>
      <div style={{ display: 'inline-flex', width: '30vh', marginLeft:'18vw', marginTop: '1vh' }}>
        <a className='fa fa-facebook' href='/e'></a>
        <a className='fa fa-youtube'></a>
        <a className='fa fa-github'></a>
        <a className='fa linkdin'></a>
        <a className='fa fa-whatsapp' href='https://wa.me/7666949043'></a>
      </div>
    </div>
  )
}
