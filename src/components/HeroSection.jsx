import React from 'react';

export default function HeroSection() {
    const bag2 = 'linear-gradient(-45deg, #bd34fe 50%, #47caff 50%)';

    return (
        <>
            <div className='flex'>
                <div className="relative -right-16 top-32">
                    <div className='flex flex-col gap-4'>
                        <h1
                            className="text-6xl font-manrope font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 from-5% via-purple-600 via-10% to-pink-500 to-90%">Vite</h1>
                        <h2 className="text-6xl font-bold text-white">Next Generation Frontend Tooling</h2>
                        <h3 className="text-2xl font-semibold text-white/55">Get ready for a development environment that can finally catch up with you.</h3>
                    </div>
                    <div className='mt-4 flex gap-2'>
                        <button className="p-2 px-5 bg-indigo-400 rounded-2xl font-bold">Get Started</button>
                        <button className="p-2 px-5 bg-zinc-800 rounded-2xl font-bold">Why Vite?</button>
                        <button className="p-2  bg-zinc-800 rounded-2xl font-bold">View on GitHub</button>
                        <button className="p-2 bg-indigo-400 rounded-2xl font-bold ">
                            <span>⚡ViteConf 24!</span>
                        </button>
                    </div>
                </div>

                {/* Image for hero section */}
                <div className="relative w-full h-full ">
                    {/* Background Color */}
                    <div class="relative inline-block top-10 -right-48">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 from-5% via-cyan-500 via-40% to-purple-600 to-50% filter blur-3xl -z-10"></div>
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

;
