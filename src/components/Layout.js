import React from "react"

import Navbar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="main">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}