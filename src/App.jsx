
import React from 'react'

import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Layout from './Layout';
import Portfolio from './portoflio/Portfolio';



export default function App() {
 let route=createHashRouter([
           { path:"", element :<Layout/>,children:[
                {path:"/" ,element:<Home/>},
                {path:"portoflio" ,element:<Portfolio/>},
                {path:"about" ,element:<About/>}, 
                {path:"contact" ,element:<Contact/>},



           ]  }



 ])
 

  return (
    <RouterProvider router={route} />
  )
}

