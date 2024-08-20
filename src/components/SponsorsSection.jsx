import React from "react";

export default function SponsorsSection() {
    return (
        <div className="container mx-auto mt-9 px-4">
            <div className="header flex flex-col gap-5 items-center">
                <div className="love">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <h3 className="text-white/50 font-semibold text-center">
                    Vite is free and open source, made <br /> possible by wonderful sponsors.
                </h3>
            </div>
            <div className="sponsors mt-5 flex justify-center">
                <div className="sponsorsAll w-full max-w-screen-lg">
                    <div className="section-sponsors">
                        <h3 className="text-center text-white/65 font-semibold bg-[#202127] rounded-t-lg mb-1">
                            Special Sponsors
                        </h3>
                        <div className="sponsors-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                            <div className="div-item flex justify-center items-center bg-[#202127] p-4">
                                <img src="src/assets/stackblitz.svg" alt="StackBlitz" className="max-w-full max-h-8 object-contain" />
                            </div>
                            <div className="div-item flex justify-center items-center bg-[#202127] p-4">
                                <img src="src/assets/nuxtlabs.svg" alt="NuxtLabs" className="max-w-full max-h-8 object-contain" />
                            </div>
                            <div className="div-item flex justify-center items-center bg-[#202127] p-4">
                                <img src="src/assets/astro.svg" alt="Astro" className="max-w-full max-h-8 object-contain" />
                            </div>
                        </div>
                    </div>
                    {/* Placeholder for additional sections, if needed */}
                    <div className="section-sponsors"></div>
                    <div className="section-sponsors"></div>
                </div>
            </div>
        </div>
    );
}
