import React from 'react';
import FooterLogo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, } from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <video autoPlay loop muted className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]">
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} alt="" className="max-h-[60px]"/>
            </h1>
            {/* Travel logo */}
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+123 456 789</p>
            </div>
            {/* social Handles */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl"/>
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl"/>
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl"/>
                </a>
              </div>
            </div>
          </div>
          {/* footer links */}
        </div>
      </div>
    </div>
  )
}

export default Footer
