"use client";
import Image from "next/image";
// import headerData from "@/data/header.json";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const HeaderMenu = () => {

    // const headerData=['Home','Products','Services','About','Cart']

    const headerData=[{href:'',label:'Home'},{href:'',label:'Products'},{href:'',label:'Services'},{href:'',label:'About'},{href:'',label:'Cart'}]
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        console.log("click");
        setShowMenu((prev) => !prev);
    };
    return (
        <header className="flex justify-between items-center px-6 absolute z-10 w-full">
            <div className=" flex justify-between w-full items-center py-3 border-b-2 border-white">
                <Link href="/" className="font-bebas text-white text-xl pl-2.5">
                    <Image src={'/images/Silvee-white-logo.png'} alt='silvee logo' height={100} width={90} />
                </Link>

                <ul
                    className={`flex flex-col duration-300 sm:flex-row absolute right-0 bg-black w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${
                        showMenu ? "top-0" : "-top-[100vh]"
                    } `}
                >
                    {headerData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li className="text-base nav-hover-btn">
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ul>
                <div className="flex flex-center items-center pt-4">
                    <button
                        onClick={() => toggleMenu()}
                        className="text-white text-[20px] opacity-80 font-thin sm:hidden z-20 relative pr-2.5"
                    >
                        {showMenu ? "Close" : "Menu"}
                    </button>
                    {/* <button className="sm:block font-bebas hidden border-2 border-white rounded-full px-3 py-1 text-white hover:bg-white hover:text-black duration-300">
                        Contact Us
                    </button> */}
                </div>
            </div>
        </header>
    );
};

export default HeaderMenu;