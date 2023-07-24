import React from 'react'

export default function Footer() {
  return (
  <>
  
  <div  style={{backgroundColor:"#2C3E50"}}>
   
  <div className='container'>
    
    <div className='d-flex justify-content-between align-items-center py-5 text-white text-center'>
   
   <div className='col-4'>
    <h3>LOCATION</h3>
    <p>2215 John Daniel Driv Clark, MO 65243</p>

   </div>
   <div className='col-4'>
<h3>AROUND THE WEB</h3>
   </div>
   <div className='col-4'>
 <h3>ABOUT FREELANCER</h3>
 <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>

   </div>
    </div>
    </div>
    <div style={{backgroundColor:"#1A252F", padding:"20px 0px", textAlign:"center", color:"#fff"}}>
          <span>Copyright © Your Website 2021</span>
    </div>
</div>

  </>
  )
}
