import React from "react";
import Marquee from "react-fast-marquee";
import ClientLogo from "./ClientLogo";

export const Morque = () => {
    const client = [
        { name: "Global Farma", imageUrl: "/clients/2.png" },
        { name: "The Mechanic", imageUrl: "/clients/3.png" },
        { name: "Shiv Shmbu Webworks", imageUrl: "/clients/4.png" },
        { name: "ITC", imageUrl: "/clients/5.png" },
        { name: "Siddhanath Trendz", imageUrl: "/clients/6.png" },
        { name: "Samsung", imageUrl: "/clients/7.png" },
        { name: "Johnson Johnson", imageUrl: "/clients/8.png" },
    ];

    return (
        <div className="bg-custom-white my-[10px] md:my-20 rounded-2xl mx-4 sm:mx-10 md:mx-20 lg:mx-35 p-4 pb-10">
            <h2 className="text-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-reckless mx-3 my-4 text-center">
                OUR CLIENTS
            </h2>
            <Marquee className="w-full" speed={200}>
                {client.map((clt, index) => (
                    <ClientLogo key={index} client={clt} />
                ))}
            </Marquee>
        </div>
    );
};

export default Morque;
