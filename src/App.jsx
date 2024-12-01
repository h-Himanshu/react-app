import { useState } from 'react'
import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Gallary from './components/Gallary'
import Video from './components/VIdeo'
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element:<><Navbar/><Layout value = {<Home/>} color = {"violet"}/></>
    },
    {
      path : "/gallary",
      element:<><Navbar/><Layout value = {<Gallary/>} color = {"#bbb"}/></>
    },
    {
      path : "/video",
      element:<><Navbar/><Layout value = {<Video/>} color = {"#bbb"}/></>
    },
    {
      path : "/feedback",
      element:<><Navbar/><Home/></>
    },
])
  return (
    <>
    
      <RouterProvider router = {router} />
    </>
  )
}

export default App
