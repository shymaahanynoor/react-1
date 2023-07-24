import React from 'react'
 import x from '../assets/avataaars.svg'
 import'./Home.css'
export default function Home() {
  return <>
  <div className='text-center pb-5 d-flex justify-content-center align-items-center' style={{backgroundColor:"#1ABC9C",height:"100vh",paddingTop:"100px"}}>
 <div>
  <img src={x}  className="pt-5 " style={{width:"50%"}}/>
  <h1 style={{fontSize:"65px", color:"#fff",fontWeight:"700",paddingBottom:"20px"}}>START REACT</h1>
 
  
  <div className='d-flex justify-content-between par'>
    <div className='line'>

    </div>
    <div>
    <i class="fa-solid fa-star"></i>
    </div>
    <div className='lines'>

    </div>

  </div>
 <p className='text-white fs-4 py-5'> Graphic Artist - Web Designer - Illustrator</p>
  </div>
  </div>
  </>
}
