"use client";
import Image from "next/image";
import React, { useState } from "react";

const HeaderMenu = () => {
    const headerData = [
        { href: "#Home", label: "Home" },
        { href: "#Clients", label: "Clients" },
        { href: "#Gallery", label: "Gallery" },
        // { href: "#Gallery", label: "Gallery" },
        // { href: "#Gallery", label: "Gallery" },
        // {href:}
    ];

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu((prev) => !prev);

    const handleScroll = (e:any, href:any) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
            setShowMenu(false); // Close menu after clicking
        }
    };

    return (
        <header className="fixed w-full z-50 bg-black shadow-md">
            <div className="flex justify-between items-center py-3 border-b-2 border-white">
                <a href="#" className="font-bebas text-white text-xl pl-2.5">
                    <Image src="/images/Silvee-white-logo.png" alt="logo" height={100} width={90} />
                </a>

                <ul className={`flex flex-col duration-300 mx-6 sm:flex-row absolute right-0 bg-black w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${
                        showMenu ? "top-0" : "-top-[100vh]"
                    } `}>
                    {headerData.map((item, index) => (
                        <li key={index} className="text-base">
                            <a href={item.href} onClick={(e) => handleScroll(e, item.href)} className="text-white cursor-pointer">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button onClick={toggleMenu} className="text-white px-5 sm:hidden">
                    {showMenu ? "Close" : "Menu"}
                </button>
            </div>
        </header>
    );
};

export default HeaderMenu;
