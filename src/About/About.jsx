import React from 'react'
import'./About.css'
export default function About() {
  return (
   <>
   <div className='about text-white' style={{backgroundColor:"#1ABC9C",padding:"100px 0px",lineHeight:"1.6"}}>
   <div class="m-auto"style={{width:"55%"}}>
    <h1 className='text-center pt-5 fw-bolder'style={{fontSize:"50px"}}>ABOUT</h1>
    
  <div className='d-flex justify-content-between par mt-4'>
    <div className='linea'>

    </div>
    <div>
    <i class="fa-solid fa-star"></i>
    </div>
    <div className='linesa'>

    </div>

  </div>

  <div className="d-flex justify-content-between align-items-center py-5 g-5" style={{fontSize:"20px"}}>
    <p className='me-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML
      , CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p>You can create your own custom avatar for the masthead, change the icon in the dividers,
   and add your email address to the contact form to make it fully functional!</p>
  </div>
   </div>
   </div> 
   </>

  )
}

