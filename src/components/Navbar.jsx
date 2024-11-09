"use client";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaInfoCircle, FaServicestack, FaBriefcase, FaSchool, FaPhone, FaBlog } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.menu-container')) {
        setIsOpen(false);
        setIsServicesOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsServicesOpen(false);
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (category) => {
    setActiveSubmenu(activeSubmenu === category ? null : category);
  };

  const menuItems = [
    { title: "Home", href: "#", icon: <FaHome /> },
    { title: "About Us", href: "#", icon: <FaInfoCircle /> },
    {
      title: "Services/Work",
      href: "#",
      icon: <FaServicestack />,
      subMenu: [
        { 
          title: "2D Animation", 
          href: "#",
          subItems: [
            { title: "Explainer Videos", href: "#" },
            { title: "Character Animation", href: "#" },
            { title: "Motion Graphics", href: "#" },
          ]
        },
        { 
          title: "3D Animation", 
          href: "#",
          subItems: [
            { title: "3D Modeling", href: "#" },
            { title: "3D Animation", href: "#" },
          ]
        },
        { 
          title: "Digital Products", 
          href: "#",
          subItems: [
            { title: "Mobile Development", href: "#" },
            { title: "Web Development", href: "#" },
            { title: "Game Development", href: "#" },
          ]
        },
      ],
    },
    { title: "Career", href: "#", icon: <FaBriefcase /> },
    { title: "School", href: "#", icon: <FaSchool /> },
    { title: "Contact", href: "#", icon: <FaPhone /> },
    { title: "Blog", href: "#", icon: <FaBlog /> },
  ];

  return (
    <>
      {/* Hamburger Menu Icon */}
      <div className={`fixed ${isMobile ? 'top-4 right-4' : 'top-[40px] right-[100px]'} text-[40px] cursor-pointer z-50`}>
        {isOpen ? (
          <IoMdClose onClick={handleOpen} className="text-white" />
        ) : (
          <GiHamburgerMenu onClick={handleOpen} />
        )}
      </div>

      {/* Main Menu */}
      <div
        className={`fixed inset-0 bg-[#002626]/95 text-white transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } z-40 overflow-y-auto`}
      >
        <div className="menu-container min-h-screen py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-12 w-full">
              {/* Navigation Menu */}
              <div className="w-full lg:w-1/2">
                <ul className="flex flex-col items-start lg:items-center gap-6">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={`relative w-full lg:w-auto duration-500 ${
                        isOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-[-50px] opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (item.title === "Services/Work") {
                            setIsServicesOpen(!isServicesOpen);
                          } else {
                            handleOpen();
                          }
                        }}
                        className="flex items-center gap-2 group hover:translate-y-[-5px] transition-transform duration-300"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-lg md:text-xl">{item.title}</span>
                      </a>

                      {/* Services Submenu */}
                      {item.subMenu && isServicesOpen && item.title === "Services/Work" && (
                        <div className="mt-4 ml-8 space-y-4">
                          {item.subMenu.map((subItem, subIndex) => (
                            <div key={subIndex} className="relative">
                              <button
                                onClick={() => toggleSubmenu(subItem.title)}
                                className="text-base md:text-lg hover:text-gray-300 transition-colors flex items-center gap-2"
                              >
                                {subItem.title}
                                <span className={`transform transition-transform duration-300 ${
                                  activeSubmenu === subItem.title ? 'rotate-180' : ''
                                }`}>▼</span>
                              </button>

                              {/* Category Submenu */}
                              {activeSubmenu === subItem.title && (
                                <ul className="mt-2 ml-4 space-y-2">
                                  {subItem.subItems.map((categoryItem, categoryIndex) => (
                                    <li key={categoryIndex}>
                                      <a
                                        href={categoryItem.href}
                                        onClick={handleOpen}
                                        className="text-sm md:text-base text-gray-300 hover:text-white transition-colors block py-1"
                                      >
                                        {categoryItem.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="w-full lg:w-1/2 space-y-6 mt-8 lg:mt-0">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MdLocationOn className="text-xl" />
                      <span className="text-base md:text-lg">Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MdEmail className="text-xl" />
                      <span className="text-base md:text-lg">99@explainer.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-xl" />
                      <span className="text-base md:text-lg">+00 000 0000</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-lg mb-3">Have a project in mind?</p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="max-w-[70ch]">
          <h1 className="text-2xl md:text-[45px] mb-[20px] tracking-[1px] font-bold">
            Hamburger Menu
          </h1>
          <div className="font-semibold space-y-4">
            <p className="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde numquam
              odit fuga nulla dicta quasi!
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde numquam
              odit fuga nulla dicta quasi!
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde numquam
              odit fuga nulla dicta quasi!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;