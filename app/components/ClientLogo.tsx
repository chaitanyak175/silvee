import React from "react";

function ClientLogo({ client }: any) {
    return (
        <div className="bg-black px-0 mx-4 rounded-xl pb-1 md:pb-3 h-auto w-[150px] md:w-[480px]">
            <div className="rounded-xl bg-white w-[150px] h-[150px] md:w-[480px] md:h-[300px] flex flex-col justify-center items-center gap-3  border-2 border-black">
                <div
                    className="w-[100px] h-[100px] md:w-[480px] md:h-[300px] bg-cover bg-center rounded-xl"
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
