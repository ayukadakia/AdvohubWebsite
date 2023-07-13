import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import project1 from "../../public/images/projects/branch2.png";
import project2 from "../../public/images/projects/right2.png";
import project3 from "../../public/images/projects/win2.png";


const FeaturedResource = ({type, title, summary, img, link}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-green bg-beige shadow-2xl p-12'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-green rounded-br-3xl'/>

            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-green font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className=' text-green hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-green'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target="_blank" className='rounded-lg bg-green text-white hover:underline underline-offset-2 p-2 px-6 text-lg font-semibold'>Visit Game</Link>
                </div>
            </div>

        </article>
    )
}

const Resource = ({title, type, img, link}) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-green bg-beige p-6 relative">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-green rounded-br-3xl'/>
             <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-green font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className=' text-green hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target="_blank" className='rounded-lg bg-green text-white hover:underline underline-offset-2 p-2 px-6 text-lg font-semibold'>Visit</Link>
                </div>
            </div>
        </article>
    )
}



const resources = () => {
  return (
    <>
    <Head> 
        <title>Advohub | Educational Resources Page</title>
        <meta name="description" content="any description" />
    </Head>
    <main className='w-full flex flex-col items-center justify-center bg-beige'>
        <Layout className='pt-8'>
        <h1 className='text-green text-4xl text-center pt-1.5'>Educational Resources</h1>
            <p  className='text-green text-1xl text-center pt-4 pl-32 pr-32 pt-4 pb-4'>Education 
            serves as a <mark className="bg-white text-green">powerful catalyst</mark> for fostering empathy, critical thinking, and a deeper 
            understanding of the <mark className="bg-white text-green">challenges</mark> faced by marginalized communities. By breaking down 
            barriers to education and providing <mark className="bg-white text-green">equitable access to resources,</mark> we unlock the 
            potential for informed and engaged citizens who can tackle pressing problems 
            with <mark className="bg-white text-green">creativity and compassion.</mark>
</p>
            <div className='grid grid-cols-12 gap-24 pb-10'>
                <div className='col-span-12 mx-20 mt-10'>
                    <FeaturedResource 
                    title="Branches of Power -iCivics"
                    img={project1}
                    summary="With iCivic's cool Branches of Power game, you can introduce presidential agendas, write 
                    laws, decide whether bills pass or get vetoed, and even judge the laws that make 
                    it through. It's a lot of responsibility!"
                    link="https://www.icivics.org/games/branches-power"
                    type="Featured Game"
                    />
                </div>
                <div className='col-span-6 ml-20'>
                <Resource 
                    title="Do I Have a Right? - iCivics"
                    img={project2}
                    link="https://www.icivics.org/games/do-i-have-right"
                    type="Game"
                    />
                </div>
                <div className='col-span-6 mr-20'>
                <Resource 
                    title="Win the White House - iCivics"
                    img={project3}
                    link="https://www.icivics.org/games/win-white-house"
                    type="Game"
                    />
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default resources