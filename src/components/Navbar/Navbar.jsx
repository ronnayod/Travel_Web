import React from 'react'
import { Link, NavLink} from "react-router-dom";
import LogoImg from "../../assets/logo.png"
import { FaCaretDown } from "react-icons/fa";

const DropdownLinks = [
  { name: "Out Services", link: "/Services" },
  { name: "Top Brands", link: "/Brands" },
  { name: "Location", link: "/Location" },
]

const Navbar = () => {
  return (
    <>
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container py-[2px] sm:block ">
          <div className="flex justify-between">
            <p>20% off on next booking</p>
            <p>Mobile No. +91 123456789</p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* logo secrion */}
          <div>
            <Link to="/" onClick={()=>window.scrollTo(0,0)}>
              <img src={LogoImg} alt="" className="h-16" />
            </Link>
          </div>
          {/* Desktop Navlinks section */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-6">
              <li className="py-4">
                <NavLink to="/" activeClassName="active" onClick={()=>window.scrollTo(0,0)}>
                  Home
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/blogs" activeClassName="active" onClick={()=>window.scrollTo(0,0)}>
                  Blogs
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/places" activeClassName="active" onClick={()=>window.scrollTo(0,0)}>
                  Places
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/about" activeClassName="active" onClick={()=>window.scrollTo(0,0)}>
                  About
                </NavLink>
              </li>
              {/* Dropdown section */}
              <li className="py-4 relative group cursor-pointer">
                <div className="dropdown grop flex items-center">
                  <span>Quick Links</span>
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </div>
                <div className="absolute -left-9 z-[9999] hidden group-hover:block shadow-md taxt-black w-[150px] bg-white p-2">
                  <ul>
                    {DropdownLinks.map((data) => {
                      return(
                        <li key={data.name}>
                          <a 
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      );
                      
                    })}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Book Now button */}
          <div>
            <button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:bg-primary
            transition-all duration-600 text-white px-3 py-1 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Navbar
