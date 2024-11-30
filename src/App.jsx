import { useState } from 'react'
import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Gallary from './components/Gallary'
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element:<><Navbar/><Layout value = {<Home/>} color = {"violet"}/><Footer/></>
    },
    {
      path : "/gallary",
      element:<><Navbar/><Layout value = {<Gallary/>} color = {"#bbb"}/><Footer/></>
    },
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
