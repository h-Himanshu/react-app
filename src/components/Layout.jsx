import React from 'react'
import Footer from './Footer'
import Form from './Form'
const Layout = ({value}) => {
  return (
    <>
    <div className="layout">
        <div className="left"></div>
        <div className="middle">{value}</div>
        <div className="right"><Form/></div>
    </div>
    
    </>
  )
}

export default Layout