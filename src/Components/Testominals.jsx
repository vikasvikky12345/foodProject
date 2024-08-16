import {motion } from "framer-motion";
import { slideUp } from './Hero';

const Testominals = () => {
  return (
    <section>
        <div className="conatiner py-24 grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
            <div className='space-x-5 lg:max-w-[400px]'>
                <motion.p 
                variants={slideUp(0.4)}
                initial="hidden"
                whileInView="show"
                className='text-xl font-serif relative z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque pariatur, corrupti nesciunt aut ad dolore excepturi ab labore, veniam dolorem odio tempore sint ex accusantium, nostrum optio aliquam? Tempora.</motion.p>
                <div className='flex items-center gap-3'>
                    <motion.img
                    variants={slideUp(0.8)}
                    initial="hidden"
                    whileInView="show"
                    src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
                    alt='img'
                    className='w-14 h-14 rounded-full object-cover'
                    />
                    <motion.div 
                    variants={slideUp(1.2)}
                    initial="hidden"
                    whileInView="show"
                    className="div">
                        <h2 className='text-xl fontbold'>John Doe</h2>
                        <p className='text-sm'>Designation</p>
                    </motion.div>
                </div>
            </div>
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
                 src="banner.png" alt="banner" className='relative z-10 w-full lg:max-w-[280px] img-shadow' />
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{opacity:1}}
                transition={{duration:0.6,delay:0.5}}
                 className='
                absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] w-[320px]  
                h-[320px] bg-[#f6d876] rounded-full'></motion.div>
            </div>
        </div>
    </section>
  )
}

export default Testominals
