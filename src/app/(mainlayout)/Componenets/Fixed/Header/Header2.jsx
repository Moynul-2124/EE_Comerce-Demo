



'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AnimatedLink from "../../../HomeCompo/Shared/AnimatedLink";
import { MdArrowDropDown } from "react-icons/md";
import { GiCartwheel, GiLoveHowl } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Link from 'next/link';
const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Redux selectors
  const cart = useSelector((state) => state.product.cart);
  const wishlist = useSelector((state) => state.product.wishlist);
  const quickView = useSelector((state) => state.product.quickView);

  return (
    <header className="bg-white text-black shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-14 h-14"
            src="/BCO.7c2336b7-d2a2-4532-ba3c-3707ec7f5575.png"
            alt="Logo"
          />
          <button
            className="md:hidden text-sm font-semibold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰ Menu
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`w-full md:w-auto ${menuOpen ? "block" : "hidden"} md:flex gap-4 text-sm mt-4 md:mt-0`}>
          <AnimatedLink href="/"><li className="hover:cursor-pointer">HOME</li></AnimatedLink>
          <AnimatedLink href="/shops"><li className="hover:cursor-pointer">SHOPS</li></AnimatedLink>
          <AnimatedLink href="/products"><li className="hover:cursor-pointer">PRODUCTS</li></AnimatedLink>
          <AnimatedLink href="/blog"><li className="hover:cursor-pointer">BLOG</li></AnimatedLink>
          <AnimatedLink href="/pages"><li className="hover:cursor-pointer">PAGES</li></AnimatedLink>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Dropdowns */}
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-sm rounded-xl">
                Language <MdArrowDropDown />
              </div>
              <ul tabIndex={-1} className="dropdown-content menu p-2 shadow-md bg-white rounded-box w-28">
                <li><a>English</a></li>
                <li><a>Bangla</a></li>
              </ul>
            </div>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-sm rounded-xl">
                Currency <MdArrowDropDown />
              </div>
              <ul tabIndex={-1} className="dropdown-content menu p-2 shadow-md bg-white rounded-box w-24">
                <li><a>USD</a></li>
                <li><a>Taka</a></li>
              </ul>
            </div>
          </div>

          {/* Icons with live counts */}
          <div className="flex gap-4 items-center text-xl relative">
            <div className="relative">
              <FiSearch />
            </div>

            <Link href="/cart">
              <div className="relative cursor-pointer">
                <GiCartwheel />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {cart.length}
                  </span> 
                )}
              </div>
            </Link> 

            <div className="relative">
              <GiLoveHowl />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </div>

            <div className="relative">
              <RiAccountCircleFill />
              {quickView && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  1
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
