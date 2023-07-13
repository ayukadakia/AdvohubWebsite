import React from 'react'

const Layout2 = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-beige p-12 ${className}`}>
        {children}
        </div>
  )
}

export default Layout2