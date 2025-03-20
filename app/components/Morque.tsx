import React from 'react';
import Marquee from "react-fast-marquee";
import ClientLogo from './ClientLogo';

// Assume client and ClientLogo are imported or defined elsewhere.

export const Morque = () => {

    const client = [
        {
            name: 'Global Farma',
            imageUrl: '/clients/2.png'
        },
        {
            name: 'The Mechanic',
          imageUrl: '/clients/2.png'
        },
        {
            name: 'Shiv Shmbu Webworks',
            imageUrl: '/clients/2.png'
        },
        {
            name: 'ITC',
            imageUrl: '/clients/3.png'
        },
        {
            name: 'Siddhanath Trendz',
            imageUrl: '/clients/4.png'
        },
        {
            name: 'Samsung',
            imageUrl: '/clients/5.png'
        },
        {
            name: 'Johnson Johnson',
           imageUrl: '/clients/6.png'
        }
    ]

    return (
        <div className="bg-[#737373] my-30 rounded-lg mx-7 md:mx-16 p-4 ">
            <h2 className="text-black font-bold text-4xl md:text-6xl mx-3 my-6">
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
