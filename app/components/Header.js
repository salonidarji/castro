import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="main-header">
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <figure className="logo-box"><a href="/"><img src="assets/images/logo.png" alt="" /></a></figure>
          <div className="menu-area">
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <Navbar /></div>
        </div>
      </div>
    </div>
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box clearfix">
          <div className="logo-box pull-left">
            <figure className="logo"><a href="/"><img src="assets/images/small-logo.png" alt="" /></a></figure>
          </div>
          <div className="menu-area pull-right">
            <nav className="main-menu clearfix">
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header