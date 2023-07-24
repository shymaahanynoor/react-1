import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
   <>
   <div className='concat' style={{padding:"120px 0px",lineHeight:"1.6"}}>
   
    <div style={{width:"55%",textAlign:"center",margin:"auto"}}>
       <h1  className='text-center pt-5 fw-bolder'style={{fontSize:"50px",color:"#2C3E50"}}>CONTACT ME</h1>
     
       <div className='d-flex justify-content-between par mt-4'>
    <div className='linec'>

    </div>
    <div>
    <i class="fa-solid fa-star"></i>
    </div>
    <div className='linesc'>

    </div>

  </div>
<div className='mt-5'>
  <input className='form-control' type="text" placeholder='Name'/>

  <input className='form-control'  type="email" placeholder='Email Adress'/>
  
  <input  className='form-control'  type="number" placeholder='Phone Number'/>
 
  <input  className='form-control'   type="text" placeholder='Message'/>


</div>


    </div>

   </div>
   </>
  )
}
