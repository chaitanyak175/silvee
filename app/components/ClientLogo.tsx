import React from 'react';
import Image from "next/image";

function ClientLogo({ client }: any) {
    return (
        <div className='rounded-xl mx-4  px-3 bg-black h-[400px] w-[500px] flex flex-col justify-center items-center gap-3'>
            <div
                className="border-r-2 w-[480px] h-[300px] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${client.imageUrl})` }}
            >
                {/* <Image
                    src={client.imageUrl}
                    alt="Client Logo"
                    width={450}
                    height={300}
                    className='rounded-2xl'
                // unoptimized
                /> */}
            </div>
            {/* <div className='flex  items-start'>
            <h3 className='text-xl font-bold '>{client.name}</h3>
            </div> */}

        </div>
    );
}

export default ClientLogo;
