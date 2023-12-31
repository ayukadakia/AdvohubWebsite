import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/ah3.png"
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";


export default function Home() {
  return (
    <>
      <Head>
        <title>Advohub</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="bg-beige flex items-center text-green w-fill">
        <Layout>
          <div flexItems-center justify-between w-full>
            <div>
              <Image src={profilePic} alt="image" className='w-full h-auto' />
            </div>
          </div>
        </Layout>
      </main>
      <Section2/>
      <Section3/>
    </>
  )
}
