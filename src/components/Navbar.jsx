// import {React} from "react";
// import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="flex flex-shrink-0 items-center text-2xl
      font-bold tracking-wide uppercase">
        KVSKM
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/venkata-sai-krishna-murty-kesanakurthi-342437237/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kvskmurty2802"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/kvskmurty2802/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leetcode"
        >
          <SiLeetcode />
        </a>
        <a href="/" rel="noopener noreferrer" aria-label="Portfolio">
          <FaGlobe />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
