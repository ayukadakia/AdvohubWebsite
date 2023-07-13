import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline block bg-green 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp; </span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className='bg-beige text-green w-full px-32 pb-2 pt-2 py-8 font-medium flex items-center justify-between'>
        <h2 className='text-2xl'>advohub</h2>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/tools" title="Advocacy Tools" className='mr-4'/>
            <CustomLink href="/resources" title="Educational Resources" className='mr-4'/>
            <CustomLink href="/contact" title="Contact Representatives" className='mr-4'/>
        </nav>
    </header>
  )
}

export default NavBar