import React from 'react'
import Footer from './Footer/Footer'
import './Layout.css'
import Main from './Main/Main'
import NavBar from './Navbar/NavBar'

const Layout = (props) => {
  const renderLayout = () => (
    <div className="layout">
      <NavBar />
      <Main />
      <Footer />
    </div>
  )

  return <>{renderLayout()}</>
}

export default Layout
