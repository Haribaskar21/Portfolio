"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/project.jpg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.gif";
import project3 from "../assets/project3.png";

const projects = [
  {
    title: "E-commerce Store",
    desc: "Developed a full-stack e-commerce platform with JWT-based authentication, secure payment integration using Stripe, and a coupon system for discounts. Built an admin dashboard for managing products and sales while optimizing performance with Redis caching. Designed a user-friendly shopping cart and checkout process using Tailwind CSS to enhance the overall shopping experience.",
    devStack: "React.js, Node.js, MongoDB, Express.js, Tailwind CSS",
    link: "#",
    git: "#",
    src: project1
  },
  {
    title: "Aero-Strike Master",
    desc: "Developed a 2D arcade game using Python and Pygame, featuring intuitive mouse controls, health management, power-ups, and progressive difficulty for enhanced player engagement. Designed a responsive UI with smooth animations and implemented modular coding practices for scalability and performance optimization.",
    devStack: "Python, Pygame",
    link: "#",
    git: "#",
    src: project2
  }, 
  {
    title: "Sushi Store",
    desc: "Designed and developed a responsive sushi-themed website featuring sections for popular dishes, trending sushi, and drinks. Implemented a clean UI with CSS Variables, Flexbox, and BEM methodology, incorporating smooth animations and dynamic rendering for an engaging user experience. Ensured full responsiveness across all devices with an optimized file structure.",
    devStack: "HTML5, CSS3, JavaScript, Vite",
    link: "#",
    git: "#",
    src: project3
  }
];

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

      <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>Selected <span className='text-orange-400'>Projects</span></h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${index % 2 === 1? " md:flex-row-reverse gap-12" : " md:flex-row"}`}
          >
            <div className="space-x-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">Link</a>
                <a href={project.git}>Git</a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700"/>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  )
}

export default Portfolio