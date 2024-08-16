import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#f6d876] rounded-t-3xl"
    >
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-3 lg:max-w-[300px]">
            <img src="logo2.png" alt="logo" className="w-24" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quod eos iste minus est eius debitis suscipit laboriosam natus
              similique!
            </p>
            <a href="#" className="inline-block mt-6 text-sm">
              Contact@food.com
            </a>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Food</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Food</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Food</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
