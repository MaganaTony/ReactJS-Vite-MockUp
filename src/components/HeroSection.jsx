import React from 'react';

export default function HeroSection() {
    return (
        <>
            <div className='container flex flex-col-reverse lg:flex-row lg:items-center max-w-screen-md px-4 lg:px-8 mx-auto'>
                <div className="relative lg:-right-16 lg:top-32 w-full xl:w-auto">
                    <div className='flex flex-col gap-4 text-center lg:text-left'>
                        <h1
                            className="text-6xl font-manrope font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 from-5% via-purple-600 via-10% to-pink-500 to-90%">Vite</h1>
                        <h2 className="text-6xl font-bold text-white">Next Generation Frontend Tooling</h2>
                        <h3 className="text-2xl font-semibold text-white/55">Get ready for a development environment that can finally catch up with you.</h3>
                    </div>
                    <div className='mt-4 grid grid-cols-2 gap-2 justify-center lg:grid-cols-4 lg:justify-start'>
                        <button className="p-2 px-5 bg-indigo-400 rounded-3xl font-bold">Get Started</button>
                        <button className="p-2 px-5 bg-zinc-800/80 rounded-3xl font-bold">Why Vite?</button>
                        <button className="p-2 px-5 bg-zinc-800/80 rounded-3xl font-bold">View on GitHub</button>
                        <button className="p-2 px-5 bg-indigo-400 rounded-3xl font-bold ">
                            <span>⚡ViteConf 24!</span>
                        </button>
                    </div>
                </div>

                {/* Image for hero section */}
                <div className="relative w-full h-full flex justify-center lg:justify-end">
                    {/* Background Color */}
                    <div className="relative inline-block top-10 -right-0 lg:-right-48">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 from-5% via-cyan-500 via-40% to-purple-600 to-50% filter blur-3xl -z-10 rounded-full"></div>
                        <img
                            src="src/assets/logo-with-shadow-removebg.png"
                            alt="Overlay Image"
                            className="relative z-10 w-96 h-96 object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
