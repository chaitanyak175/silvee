import React from "react";
import Marquee from "react-fast-marquee";
import ClientLogo from "./ClientLogo";

// Assume client and ClientLogo are imported or defined elsewhere.

export const Morque = () => {
    const client = [
        {
            name: "Global Farma",
            imageUrl: "/clients/2.png",
        },
        {
            name: "The Mechanic",
            imageUrl: "/clients/3.png",
        },
        {
            name: "Shiv Shmbu Webworks",
            imageUrl: "/clients/4.png",
        },
        {
            name: "ITC",
            imageUrl: "/clients/5.png",
        },
        {
            name: "Siddhanath Trendz",
            imageUrl: "/clients/6.png",
        },
        {
            name: "Samsung",
            imageUrl: "/clients/7.png",
        },
        {
            name: "Johnson Johnson",
            imageUrl: "/clients/8.png",
        },
    ];

    return (
        <div className="bg-custom-white my-30 rounded-4xl mx-35 md:mx-35 p-4 pb-15">
            <h2 className="text-black md:text-[130px] mx-3 my-6 font-reckless">
                OUR CLIENTS
            </h2>
            <Marquee>
                {client.map((clt, index) => (
                    <ClientLogo key={index} client={clt} />
                ))}
            </Marquee>
        </div>
    );
};

export default Morque;
