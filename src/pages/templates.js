import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'


const templates = () => {
  return (
    <>
    <Head> 
        <title>Advohub | About Page</title>
        <meta name="description" content="any description" />
    </Head>
    <main className='w-fill flex flex-col item-center justify-center overflow-hidden bg-beige min-h-full'> 
        <Layout className="pt-8 min-h-screen h-full"> 
            <h1 className='text-green text-4xl text-center pt-1.5'>Email and Letter Template</h1>
            <p  className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'>Engaging with your representatives is an 
            essential part of the democratic process. One effective way to express your opinions on a specific bill is by 
            crafting a well-written email. In this guide, we will provide you with a template and valuable tips to help 
            you compose a persuasive and impactful message to your elected officials.</p>
            <p className='text-green text-2xl pt-4 pl-32 pr-32 pt-4 pb-4'>Template for Emailing Your Representatives:</p>
            <p className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'>Dear [Representative's Title and Last Name], </p>
            <p className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'> <mark className="bg-white text-green">Paragraph 1: Introduction and Purpose</mark> <br></br> Start your email by introducing yourself 
            and explaining the purpose of your message. Mention the specific bill you wish to address and briefly 
            state your position or concerns regarding it. Be clear and concise, capturing the attention of the 
            recipient from the beginning.</p>
            <p className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'> <mark className="bg-white text-green">Paragraph 2: Explain the Impact</mark> <br></br> In this 
            section, elaborate on the potential consequences or benefits of the bill, focusing on how it may affect your 
            community, society, or a specific group of individuals. Use reliable data, research, or expert opinions to 
            strengthen your arguments and show that you have well-informed perspectives.</p>
            <p className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'> <mark className="bg-white text-green">Paragraph 3: Call to Action</mark> <br></br> Clearly 
            state what you expect from your representative. It could be voting in favor or against the bill, proposing 
            amendments, or addressing specific concerns. Encourage them to take action and emphasize the importance of 
            their role in representing your interests.</p>
            <p className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'> <mark className="bg-white text-green">Paragraph 4: Thank You and Closing</mark> <br></br> 
            Express gratitude for your representative's time and consideration. Thank them for their service and 
            dedication to the community. Provide your contact information once again, indicating your willingness 
            to discuss the matter further or answer any questions they may have.</p>
            <p className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'> Sincerely, <br></br>[Your Full Name]</p>
            <p className='text-green text-2xl pt-4 pl-32 pr-32 pt-4 pb-4'> Tips for Writing an Effective Email:</p>
            <p className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'> <mark className="bg-white text-green">1. Be Polite and Respectful:</mark> Maintain a 
            professional tone throughout your email, even if you disagree with your representative's position. 
            Avoid personal attacks or derogatory language.<br></br><mark className="bg-white text-green">2. Keep it Concise:</mark> Representatives receive numerous 
            emails every day, so it's crucial to be clear and to the point. Keep your email concise, ideally within 
            a single page, and focus on the key points that matter most to you.<br></br><mark className="bg-white text-green">3. Use Personalized Content:</mark>
            Tailor your message to reflect your personal experiences, values, or the impact the bill may have on your 
            community. Individualized messages are often more impactful than generic ones.<br></br><mark className="bg-white text-green">4. Provide Supporting 
            Evidence:</mark> Back up your claims with reliable sources, statistics, or personal anecdotes. This helps strengthen 
            your arguments and demonstrates that you've done your research.<br></br><mark className="bg-white text-green">5. Follow Formatting Guidelines:</mark> Use a 
            professional email format with appropriate salutations, paragraphs, and a polite closing. Proofread your 
            email for spelling and grammar errors before sending it.<br></br><mark className="bg-white text-green">6. Contact Information:</mark> Include your full name, 
            address, phone number, and email address to verify your identity as a constituent. This information helps 
            your representative understand that you are a legitimate and concerned citizen.</p>
            <p className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'>Conclusion:<br></br>Sending a well-crafted email 
            to your representatives can significantly impact their decision-making process. By following the template and 
            tips provided in this guide, you can effectively express your views on a bill, contribute to the democratic 
            dialogue, and help shape public policy.</p> 
            <p className='text-green text-1xl pt-4 pl-32 pr-32 pt-4 pb-4'> Remember, your voice matters, and engaging 
            with your elected officials is an important way to make a difference in your community. </p>
                 </Layout>
                 </main>
                 </>
  )
}

export default templates