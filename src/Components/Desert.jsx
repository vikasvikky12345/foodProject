import React from 'react';
import {motion} from "framer-motion";
import { slideUp } from './Hero';

const hotDesertData = [
    {
        id: 1,
        title: "Hot Desert",
        price: "$15",
        image: "food.png",
        delay: 0.4, // Corrected the key here
    },
    {
        id: 2,
        title: "Hot Desert",
        price: "$15",
        image: "food2-plate.png",
        delay: 0.8,
    },
    {
        id: 3,
        title: "Hot Desert",
        price: "$15",
        image: "banner.png",
        delay: 1.2,
    },
];

const Desert = () => {
    return (
        <section>
            <motion.div
            variants={slideUp(0)}
            initial="hidden"
            whileInView="show"
             className="container py-12">
                <h3 className='text-2xl font-semibold py-8 text-[#05ab54]'>Hot Desert</h3>
            </motion.div>
            <div
             className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:grid-cols-2'>
                {hotDesertData.map((item) => (
                    <motion.div
                    variants={slideUp(item.delay)}
                    initial="hidden"
                    whileInView="show"
                    key={item.id} className='group bg-white/50 shadow-md p-3 flex items-center gap-3'>
                        <img src={item.image} alt={item.title} className='w-24 rounded-full img-shadow 
                        group-hover:scale-125 duration-700 transition-all group-hover:rotate-45'/>
                        <div>
                            <h3 className='text-xl font-semibold'>{item.title}</h3>
                            <p className='text-xl text-yellow-500'>{item.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Desert;
