import React from 'react'
import {motion } from "framer-motion";
import { slideUp } from './Hero';

const Banner = () => {
  return (
    <section>
        <div className="conatiner py-24 grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
            <div className="relative">
                <motion.img
                initial={{ opacity: 0 ,
                x: -100,
            y:100}}
                whileInView={{opacity:1,x:0,y:0}}
                whileHover={{
                    scale:1.2,
                    rotate:15,
                    x:50,
                    y:-50,
                }}
                transition={{
                    duration:0.8,
                    delay:0.5,
                    scale:{duration:0.5}
                }}
                 src="banner.png" alt="banner" className='relative z-10 w-full lg:max-w-[350px] img-shadow' />
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{opacity:1}}
                transition={{duration:0.6,delay:0.5}}
                 className='
                absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] w-[320px] md:h-[400px] md:w-[400px] h-[320px] bg-[#f6d876] rounded-full'></motion.div>
            </div>
            <div className='space-x-5 lg:max-w-[400px]'>
                <motion.h1 
                variants={slideUp(1)}
                initial="hidden"
                whileInView="show"
                className='text-6xl font-leagueGothic font-semibold uppercase'>The Best Yummy Food in the Town</motion.h1>
                <motion.p
                variants={slideUp(1.3)}
                initial="hidden"
                whileInView="show"
                >Order food from your favorite restaurants near you.</motion.p>
                <motion.button
                variants={slideUp(1.5)}
                initial="hidden"
                whileInView="show"
                
                 className='btn-primary'>Order now</motion.button>
            </div>
        </div>
    </section>
  )
}

export default Banner
