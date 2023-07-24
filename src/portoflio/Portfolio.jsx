import React from 'react'
import'./Portfolio.css'
import y from '../assets/cabin.png'
import z from '../assets/cake.png'
import a from '../assets/circus.png'
import b from '../assets/game.png'
import c from '../assets/safe.png'
import d from '../assets/submarine.png'
export default function Portfolio() {
  


  return (
   <>


  

   <div className='container m-auto' style={{padding:"100px 0px"}}>
    <h1 className='text-center pt-5 fw-bolder'style={{fontSize:"50px",color:"#2C3E50"}}>PORTFOLIO</h1>
  
    <div className='d-flex justify-content-between par mt-4'>
    <div className='linep'>

    </div>
    <div>
    <i class="fa-solid fa-star"></i>
    </div>
    <div className='linesp'>

    </div>

  </div>
    
    <div className='row text-center gx-5 gy-4 mt-5'>
      <div className='col-4 mt-5' >
        <div className='part'>
      <img src={y}  width="100%"/>
       <div className='overlay'>

       </div>
       </div>
      </div>
      <div className='col-4 mt-5'>
        <div className='part'>
      <img src={z}  width="100%"/>
       <div className='overlay'>

       </div>
       </div>

       </div>
      <div className='col-4 mt-5'>
        <div className='part'>
      <img src={a}  width="100%"/>
       <div className='overlay'>

       </div>
       </div>
      </div>
      <div className='col-4 '>
        <div className='part'>
      <img src={b}  width="100%"/>
       <div className='overlay'>

       </div>
       </div>
      </div>
      <div className='col-4'>
        <div className='part'>
      <img src={c}  width="100%"/>
       <div className='overlay'>

       </div>
       </div>
      </div>
      <div className='col-4'>
        <div className='part'>
      <img src={d}  width="100%"/>
       <div className='overlay'>

       </div>
       </div>
      </div>
    </div>

   </div>


   
   </>
  )
}
