import React from 'react'
import Footer from './Footer'
import Form from './Form'
const Layout = (props) => {
  return (

    <div className="layout">
        <div className="left"></div>
        <div className="middle" style={{backgroundColor : props.color}}>{props.value}</div>
        <div className="right"><Form/></div>
        <div className="footer"><Footer/></div>
    </div>
    
  )
}

export default Layout