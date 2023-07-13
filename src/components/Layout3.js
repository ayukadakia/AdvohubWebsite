import React from 'react'

const Layout3 = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-beige ${className}`}>
        {children}
        </div>
  )
}

export default Layout3