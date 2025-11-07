


import React from 'react';
import { MdOutlineCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
const Header1 = () => {
    return (
        <div className='bg-white  text-black'>
            <div className='text-[14px] bg-[#F8F8FB]'><div className='flex shadow-2xl    container items-center mx-auto justify-between'>

                <div className='flex gap-6'>

                    <div className='flex gap-1 translate-x-2 items-center'>


                        <p className='translate-y-0.5'><MdOutlineCall /></p>
                        <p className='translate-y-0.5'>+91 987 654 3210</p>

                    </div>

                    <div className='flex gap-1 items-center'>

                        <FaWhatsapp />

                        <p className='translate-y-0.5'>+91 987 654 3210</p>

                    </div>
                </div>


                <div className='flex gap-6'>

                    <Link href={"/"}><p>Home</p></Link>
                    <Link href={"/courage"}><p>Courage</p></Link>
                    <div className='hover:cursor-pointer'>


                        <details>
                            <Link href={"/product"}><summary>Product</summary></Link>
                            <ul className="shadow-xl rounded-t-md  p-4">
                                <Link href={"/productleftsidebar"}><li>Product Left Sidebar</li></Link>
                                <Link href={"/productrightsidebar"}><li>Product Right Sidebar </li></Link>
                            </ul>
                        </details>
        
                    </div>
                    <Link href={"/blog"}><p>Blog</p></Link>
                    <Link href={"/contact"}><p>Contact</p></Link>



                </div>


                <div className='flex items-center '>


                    <p>Help ?</p>
                    <p className='translate-x-5'>Track Order ?</p>
                    <div>

                        <div className="navbar translate-x-5">

                            <div className="flex-none">
                                <ul className="menu menu-horizontal ">

                                    <li>
                                        <details>
                                            <summary>English</summary>
                                            <ul className=" bg-white rounded-t-none ">
                                                <li><a>English</a></li>
                                                <li><a>Italiano</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>




                    <div>

                        <div className="navbar translate-x--3  ">

                            <div className="flex-none">
                                <ul className="menu menu-horizontal  ">

                                    <li>
                                        <details    >
                                            <summary>English</summary>
                                            <ul className=" bg-white rounded-t-none ">
                                                <li><a>English</a></li>
                                                <li><a>Italiano</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>



            </div></div>
        </div>
    );
};

export default Header1;