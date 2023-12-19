"use client"
import { BsFillMoonStarsFill, BsLinkedin, BsFacebook, BsGithub  } from "react-icons/bs";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";

import { useState } from "react";


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={ darkMode ? "dark" : ""}>
      <main className='bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-colors duration-300 ease-in-out'>

        {/* Introduction */}

        <section className="min-h-screen">

          <nav className='py-10 mb-12 flex justify-between dark:text-white transition-colors duration-300 ease-in-out'>
            <h1 className='text-xl'>thrasys</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://drive.google.com/u/0/uc?id=1tbKXc6oW0A43oW_uKAAvZWNGE4NNxYzt&export=download" >Resume</a></li>
            </ul>
          </nav>

          <div className='text-center p-10 py-10 dark:text-white '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium font-firacode md:text-6xl'>Tasdikur Rahman</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Web Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white'>Just started out in the Web Development Journey.</p>
            <p className='text-md text-gray-800 dark:text-white'> Always excited to explore new concepts and implement creative details in projects!</p>
          </div>

          <div className='text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-white'>
            <a href="https://github.com/thrasys" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
            <a href="https://www.facebook.com/Tasdikur/" target="_blank" rel="noopener noreferrer">
              <BsFacebook />
            </a>
          </div>

          <div className="mx-auto relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={ deved } alt="User avatar waiving" layout="fill" objectFit="cover"/>
          </div>
        </section>

        {/* Skills */}

        <section>
          <div>
            <h3 className="text-3xl py-1 mt-10 dark:text-white">Services I Offer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Although I've just started out professionally as a <em>Web Developer</em>, I have quite a decent experience with Software Development too!
            </p>
          </div>

          <div className="lg:flex justify-around gap-10">
            <div className=" dark:text-white">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={ design } alt="" width={100} height={100}/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating clean and minimalisitc designs that feel organic.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Canva</p>
              <p className="text-gray-800 py-1 dark:text-white">Photopea</p>
            </div>
          </div>

          <div className=" dark:text-white">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={ code } alt="" width={100} height={100}/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Clean Coding</h3>
              <p className="py-2">
                Writing precise and robust code to ensure user satisfaction.
              </p>
              <h4 className="py-4 text-teal-600">Languages I'm Familiar With</h4>
              <p className="text-gray-800 py-1 dark:text-white">Python</p>
              <p className="text-gray-800 py-1 dark:text-white">Java</p>
              <p className="text-gray-800 py-1 dark:text-white">C</p>
              <p className="text-gray-800 py-1 dark:text-white">C++</p>
              <p className="text-gray-800 py-1 dark:text-white">Bash</p>
            </div>
          </div>
          </div>
          
        </section>

        {/* Portfolio */}

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/2 flex-1">
              <div className="dark:text-white">
                <h3 className="text-2xl py-1">Project: <a href="https://github.com/thrasys/cats" className="text-blue-800">Cats!</a></h3>
                <p className="m-10">It's my very first project while learning JavaScript. I have tried to implement the most basic concepts of the language. I did not bother to style up the content as I wanted to focus on using API calls, with or without tokens.</p>
              </div>
              <Image src={ web1 } alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>

            <div className="basis-1/2 flex-1">
              <div className="dark:text-white">
                <h3 className="text-2xl py-1">Project: <a href="https://github.com/thrasys/scattered-thoughts" className="text-blue-800">Scattered Thoughts</a></h3>
                <p className="m-10">A short blog writing application written with ReactJS and vanilla CSS. With this project, I wanted to challange myself to build a ReactJS application in the shortest time possible. Having completed within a day, this project implements the core utilities of ReactJS, such as states, custom hooks, routing and also a JSON server to fetch and store data.</p>
              </div>
              <Image src={ web2 } alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
