import { HERO_CONTENT } from "./../constants/index";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export default function Hero() {
  return (
    <section className="w-full from-stone-900 to-black text-stone-300 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 px-4 sm:px-6 md:px-8">
        
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center lg:items-start space-y-4">
            <motion.h2 
              variants={containerVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Krishna Murty
            </motion.h2>
            <motion.span
              variants={containerVariants}
              className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-gray-300 
              via-gray-500 to-gray-700 bg-clip-text text-transparent font-semibold"
            >
              Full Stack Developer
            </motion.span>
            <motion.p 
              variants={containerVariants}
              className="my-4 sm:my-6 text-center lg:text-left text-base sm:text-lg max-w-lg leading-relaxed">
              {HERO_CONTENT}
            </motion.p>
            {/* <motion.a
              href="/resume/Resume.pdf"
              download
              className="inline-block bg-gradient-to-r from-gray-100 to-gray-400 text-stone-900 
              px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all 
              hover:scale-105 active:scale-95 text-sm sm:text-base d-block d-sm-flex align-items-center"
              role="button"
            >
              Download CV
            </motion.a> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
