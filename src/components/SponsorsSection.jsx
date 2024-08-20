import React from "react";

export default function SponsorsSection() {
    return (
        <>
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
                <div className="sponsors mt-9 flex justify-center">
                    <div className="sponsorsAll w-full max-w-screen-lg">
                        <div className="section-sponsors">
                            <h3 className="text-center text-white/65 font-semibold bg-[#202127] rounded-t-lg mb-1">
                                Special Sponsors
                            </h3>
                            <div className="sponsors-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-32 ">
                                    <img src="stackblitz.svg" alt="StackBlitz" className="max-w-full max-h-8 object-contain" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-32">
                                    <img src="nuxtlabs.svg" alt="NuxtLabs" className="max-w-full max-h-8 object-contain" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-32">
                                    <img src="astro.svg" alt="Astro" className="max-w-full max-h-8 object-contain" />
                                </div>
                            </div>
                        </div>
                        <div className="section-sponsors">
                            <h3 className="text-center text-white/65 font-semibold bg-[#202127] rounded-t-lg mb-1 mt-1">
                                Platinum Sponsors
                            </h3>
                            <div className="sponsors-grid grid grid-cols-1 sm:grid-cols-2  gap-1">
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="storyblok.png" alt="StackBlitz" className="max-w-full max-h-8 object-contain grayscale" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="bit.svg" alt="NuxtLabs" className="max-w-full max-h-12 object-contain" />
                                </div>
                            </div>
                        </div>
                        <div className="section-sponsors">
                            <h3 className="text-center text-white/65 font-semibold bg-[#202127] rounded-t-lg mb-1 mt-1">
                                Gold Sponsors
                            </h3>
                            <div className="sponsors-grid grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="tailwind_labs.svg" alt="StackBlitz" className="max-w-full max-h-5 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="divriots.png" alt="NuxtLabs" className="max-w-full max-h-7 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="prefect_io.svg" alt="StackBlitz" className="max-w-full max-h-8 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="jetbrains.svg" alt="StackBlitz" className="max-w-full max-h-8 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="mux.svg" alt="StackBlitz" className="max-w-full max-h-8 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="remix.svg" alt="StackBlitz" className="max-w-full max-h-8 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="nx.svg" alt="StackBlitz" className="max-w-full max-h-10 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="transloadit-dark.svg" alt="StackBlitz" className="max-w-full max-h-12 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="huly.svg" alt="StackBlitz" className="max-w-full max-h-8 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="handsontable.svg" alt="StackBlitz" className="max-w-full max-h-6 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                    <img src="latchbio.svg" alt="StackBlitz" className="max-w-full max-h-10 object-contain grayscale invert" />
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                </div>
                                <div className="div-item flex justify-center items-center bg-[#202127] p-4 h-28">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerSponsors mt-40 mb-32">
                    <div className="buttons flex gap-4 justify-center">
                        <button className="rounded-full border border-white/70 px-4 py-2 text-white/70">Sponsor Vite</button>
                        <button className="rounded-full border border-white/70 px-4 py-2 text-white/70">Sponsor Evan You</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-24">
                <div className="w-full h-0.5 bg-black"></div>
            </div>
        </>
    )
}