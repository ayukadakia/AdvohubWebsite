import React from 'react'
import Layout2 from './Layout2'
import Image from 'next/image'
import profilePic from "../../public/images/profile/myproject.png"

const Section2 = () => {
  return (
        <Layout2>
            <div className="flex items-center justify-between w-full">
                <div className='w-1/2'>
                    <Image src={profilePic} alt="pr" className='w-full h-auto' />
                </div>
                <div className='w-1/2 text-green text-3xl text-center'>
                    <h1>In a rapidly evolving world, where societal challenges 
                        persist and new issues emerge, the need for effective 
                        advocacy and <mark className="bg-white text-green">informed action </mark>
                        has <mark className="bg-white text-green">never been greater. </mark> 
                        Increasing access to advocacy tools and educational resources holds 
                        <mark className="bg-white text-green">immense significance</mark> in fostering
                        positive change and empowering individuals and 
                        communities to <mark className="bg-white text-green">make a meaningful impact.</mark></h1>
                </div>
            </div>
        </Layout2>
  )
}

export default Section2