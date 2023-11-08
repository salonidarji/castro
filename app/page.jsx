'use client'
import Card from './components/Card';
import Header from './components/Header'
import Loader from './components/Loader'
import { useEffect, useState } from 'react'
import Home from "./components/Home"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{


setTimeout(() => {
  setIsLoading(false)
}, 1000);
  },[])

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      <div className="boxed_wrapper">
        {/* Preloader */}
        {isLoading && (<Loader />)}
        {/* main header */}
        <Header />
        {/* main-header end */}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn"><i className="fas fa-times" /></div>
          <nav className="menu-box">
            <div className="nav-logo"><a href="/"><img src="assets/images/logo-2.png" alt="" title="logo page" /></a></div>
            <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>Chicago 12, Melborne City, USA</li>
                <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                <li><a href="mailto:info@example.com">info@example.com</a></li>
              </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                <li><a href="/"><span className="fab fa-twitter" /></a></li>
                <li><a href="/"><span className="fab fa-facebook-square" /></a></li>
                <li><a href="/"><span className="fab fa-pinterest-p" /></a></li>
                <li><a href="/"><span className="fab fa-instagram" /></a></li>
                <li><a href="/"><span className="fab fa-youtube" /></a></li>
              </ul>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
       <Home setIsLoading={setIsLoading} />
        {/*Scroll to top*/}
        <button className="scroll-top scroll-to-target" data-target="html">
          <i className="fas fa-long-arrow-alt-up" />
        </button>
      </div>
   
    </main>
  )
}
