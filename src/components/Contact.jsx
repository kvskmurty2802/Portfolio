import { MdEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="flex flex-col items-center justify-center gap-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3"
        >
          <MdPhone className="text-2xl text-stone-400" />
          <a href="tel:+1234567890" className="text-xl hover:text-stone-400">
            +91 770 286 2565
          </a>
        </motion.div>
        <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-3">
          <MdEmail className="text-2xl text-stone-400" />
          <a
            href="mailto:krishnamurty2802@gmail.com"
            className="text-xl hover:text-stone-400"
          >
            krishnamurty2802@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
