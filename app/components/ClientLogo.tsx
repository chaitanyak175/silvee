import React from "react";

function ClientLogo({ client }: any) {
    return (
        <div className="bg-black px-0 mx-4 rounded-xl pb-3 h-auto w-[500px]">
            <div className="rounded-xl bg-white h-[400px] w-[500px] flex flex-col justify-center items-center gap-3 border-2 border-black">
                <div
                    className="w-[480px] h-[300px] bg-cover bg-center rounded-xl"
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
        </div>
    );
}

export default ClientLogo;
