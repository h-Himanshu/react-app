import { useState } from 'react'
import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Footer from './components/Footer'
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element:<><Navbar/><Layout value = {<Home/>}/><Footer/></>
    },
    // {
    //   path : "/gallary",
    //   element:<><Navbar/><Login/></>
    // },
    // {
    //   path : "/about",
    //   element:<><Navbar/><About/></>
    // },
    // {
    //   path : "/user/:username",
    //   element:<><Navbar/><User/></>
    // },
])
  return (
    <>
    
      <RouterProvider router = {router} />
    </>
  )
}

export default App
