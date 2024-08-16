import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
    const navMenu = [
        {
            id: 1,
            title: "Home",
            link: "/",
            delay: 0.1,
        },
        {
            id: 2,
            title: "Menu",
            link: "/menu",
            delay: 0.2,
        },
        {
            id: 3,
            title: "Delivery",
            link: "/delivery",
            delay: 0.3,
        },
        {
            id: 4,
            title: "About Us",
            link: "/about",
            delay: 0.4,
        },
        {
            id: 5,
            title: "Contact Us",
            link: "/contact",
            delay: 0.5,
        },
    ];

    const slideDown = (delay) => {
        return {
            initial: {
                opacity: 0,
                y: "-100%",
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: delay,
                },
            },
        };
    };

    return (
        <nav className='bg-[#f6d876]'>
            <div className='container flex justify-between items-center font-leagueGothic'>
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    src="logo2.png" 
                    alt="logo" 
                    className='w-36' 
                />
                <div className='hidden md:block'>
                    <ul className='flex gap-6'>
                        {navMenu.map((item) => (
                            <motion.li 
                                key={item.id}
                                variants={slideDown(item.delay)}
                                initial="initial"
                                animate="animate"
                                className='nav-link'
                            >
                                <a href={item.link} className='inline-block px-2 py-2 text-2xl'>
                                    {item.title}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <motion.div variants={slideDown(1)}
                    initial="initial"
                    animate="animate"
                >
                    <button className='h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-black'>
                        <IoCartOutline />
                    </button>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
