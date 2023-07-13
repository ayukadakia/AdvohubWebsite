import "@/styles/globals.css";
import {Lora} from "next/font/google";
import Head from 'next/head'
import NavBar from "@/components/NavBar";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";


const lora = Lora({ 
  subsets: ['latin'] 
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={lora.className} bg-bgimage w-full min-h-screen >
        <NavBar/>
        <Component {...pageProps} />
    </main>
    </>
  );
}
