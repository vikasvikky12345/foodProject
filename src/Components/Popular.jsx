import {motion} from "framer-motion";
import { slideUp } from "./Hero";
const popularData = [
    {
        id: 1,
        title: "Hot Desert",
        price: "$15",
        image: "food.png",
        delay: 0.4,
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
const Popular = () => {
  return (
    <section>
        <div className="conatiner py-24">
            <motion.h3
            variants={slideUp(0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl font-semibold font-leagueGothic uppercase py-8">Our Popular Receipe</motion.h3>
        </div>
        <div className="card-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {popularData.map((item) => (
                <motion.div
                variants={slideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                key={item.id} className="group bg-white/50 shadow-md p-3 flex items-center gap-3 space-y-3 text-center rounded-xl">
                    <img src={item.image} alt={item.title} className="w-44 rounded-full img-shadow group-hover:scale-x-110 duration-400 transition-all group-hover:rotate-[50deg] group-hover:translate-y-[-50px]"/>
                    <div>
                        <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">Buy Now</button>
                        <p className="text-xl font-bold">{item.name}</p>
                        <p className="text-xl font-bold text-yellow-500">{item.price}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Popular
