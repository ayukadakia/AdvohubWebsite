import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import article1 from "../../public/images/articles/email_cleanup3.png";
import article2 from "../../public/images/articles/resources7.png";
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedTools = ({img, title, time, summary, link}) => {
    return (
        <li className=' relative col-span-1 w-full p-4 bg-beige border border-solid border-green rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-green rounded-br-3xl'/>
            <Link
            href={link}
            target="_blank"
            className="w-full cursor-pointer overflow-hidden">
            <FramerImage src={img} alt={title} className="w-full h-auto rounded-2xl"
            whileHover={{scale:1.05}}
            transcription={{duration:0.2}} 
            />   
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold text-green my-2 hover:underline'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 text-green'>{summary}</p>
            <span className='text-green font-semibold'>{time}</span>
        </li>
    )
}

const tools = () => {
  return (
    <>
    <Head> 
        <title>Advohub | About Page</title>
        <meta name="description" content="any description" />
    </Head>
    <main className='w-fill flex flex-col item-center justify-center overflow-hidden bg-beige'> 
        <Layout className="pt-8"> 
            <h1 className='text-green text-4xl text-center pt-1.5'>Advocacy Tools</h1>
            <p  className='text-green text-1xl text-center pt-4 pl-32 pr-32 pt-4 pb-4'>Access to 
                 advocacy tools is <mark className="bg-white text-green">vital for amplifying voices</mark> and mobilizing support around
                 important causes. By providing individuals with the means to <mark className="bg-white text-green">organize, communicate, 
                 and advocate</mark> for their rights and beliefs, we pave the way for a more <mark className="bg-white text-green">inclusive 
                 and democratic society.</mark> Empowering people with these tools allows them to rally 
                 communities, raise awareness, and create grassroots movements that can challenge 
                 injustice, champion human rights, and bring about <mark className="bg-white text-green"> transformative social change.</mark></p>
            <ul className='h-full grid grid-cols-2 gap-16 pl-16 pr-16 pb-16'>
                <FeaturedTools 
                title="Ready-to-Use Email Templates for Contacting Representatives"
                summary="This ready-to-use template allows individuals to express their concerns and opinions effectively. By simplifying the advocacy process, this template empowers citizens to actively participate in public discourse and influence decision-making in government."
                time="3 min read"
                link="/templates"
                img={article1}
                />
                <FeaturedTools 
                title="Disability Rights California Publications and Resource Library"
                summary="This section of Disability Rights California's website contains materials and publications that aim to help individuals understand their rights and empower them to advocate for themselves or others. "
                time="Read Time Varies"
                link="https://www.disabilityrightsca.org/publications"
                img={article2}
                />
                </ul>

        </Layout>
    </main>

    
    </>
    )
}

export default tools