"use client"
import React from 'react';
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";


const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id="about">

      <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-orange-400'>Me</span></h1>

      <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>

        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={book} alt="book" className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Education</h2>
              <p className='text-lg text-white/70 mt-2'> Bachelor in Computer Applications
                  Vels Institute of Science, Technology & Advanced Studies, Chennai (2021–2024)
                  Built a strong foundation in full stack development, databases, and software engineering, with hands-on experience in MERN stack, API development, and cloud technologies through projects and internships. 
              </p>
            </div>
          </div>
        </div>


        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={finance} alt="finance" className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Problem-Solving</h2>
              <p className='text-lg text-white/70 mt-2'> Strong problem-solving and debugging skills, with the ability to analyze complex issues, optimize code efficiency, and develop effective solutions. </p>
            </div>
          </div>
        </div>




        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={pc} alt="pc" className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
              <p className='text-lg text-white/70 mt-2'> As a Full Stack Developer, I specialize in React.js, Next.js, Node.js, MongoDB, and Tailwind CSS. Through projects and internships, I have built scalable web applications, secure authentication systems, and optimized backend performance using JWT, Redis, and RESTful APIs.
              </p>
            </div>
          </div>
        </div>


        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={card} alt="card" className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
              <p className='text-lg text-white/70 mt-2'> Full Stack Developer Intern – Altruisty (Dec 2024 – Feb 2025) | Designed and developed a responsive UI, implemented an interactive challenge system, and optimized UI/UX performance for better user engagement.
                     <br></br>Web Developer Intern – Codsoft (Nov 2024 – Dec 2024) | Built a portfolio, landing page, and interactive calculator, enhancing UI/UX, mobile responsiveness, and overall performance.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About