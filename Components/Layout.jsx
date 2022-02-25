import React from 'react'
import Header from './Header'
import Footer from './footer'
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <div className="foot_bg">
      <div className=" mt-60  w-full  ">
        <Footer />
      </div>
    </div>
  </>
)

export default Layout
