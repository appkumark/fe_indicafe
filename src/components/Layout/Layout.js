import React from 'react'
import Footer from './Footer/Footer'
import './Layout.css'
import Main from './Main/Main'
import NavBar from './Navbar/NavBar'

const Layout = (props) => {
  const renderLayout = () => (
    <div className="layout">
      <NavBar />
      <Main title={props.title} background={props.background} backdrop={props.backdrop}>
        {props.children}
      </Main>
      <Footer />
    </div>
  )

  console.log(props.children)
  return <>{renderLayout()}</>
}

export default Layout
