"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const { cart } = useSelector(state=>state);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Define the menu items
  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about-us' },
    { text: 'Urns', href: '/#products' },
  ];

  // console.log(cart, "cart");
  return (
    <div className="bg-[#FFFFFF] px-3 py-2 flex justify-between h-18 shadow z-10 relative">
      <div className="flex block gap-3">
        <Link className="flex" href="/">
          <Image width={200} height={45} src={"/img/Mask Group.png"} alt="" />
          <Image width={120} height={34} src={"/img/galatea.png"} alt="" />
        </Link>
      </div>
      <div className="flex items-center">
        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* Mobile Menu Popup */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white z-20 shadow">
              <ul className="flex flex-col items-center gap-5 p-4 z-50">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} onClick={closeMobileMenu}>
                      {item.text}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/auth/signup">
                    <Image width={28} height={30} src={"/icons/User.svg"} alt="man icon" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Image width={25} height={33} src={"/icons/Bag.svg"} alt="bag icon" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Desktop Menu */}
        <ul className={`hidden md:flex flex-row gap-5 ${isMobileMenuOpen ? 'hidden' : ''}`}>
          {menuItems.map((item, index) => (
            <li className="my-auto" key={index}>
              <Link href={item.href} onClick={closeMobileMenu}>
                {item.text}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/auth/signup">
              <Image width={28} height={30} src={"/icons/User.svg"} alt="man icon" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image width={25} height={33} src={"/icons/Bag.svg"} alt="bag icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
