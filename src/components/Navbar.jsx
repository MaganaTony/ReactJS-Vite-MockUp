import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVersionOpen, setIsVersionOpen] = useState(false);

    return (
        <nav className="flex justify-between p-5 sticky top-0 z-50">
            <div className="flex text-lg font-semibold text-white">
                <img src="/vite.svg" className="h-7 mx-2" alt="Vite logo" />
                <span>Vite</span>
                <div className="ms-8 bg-zinc-950/45 w-auto rounded-lg h-10 p-1 gap-4 text-white/50 border border-zinc-950 hover:border-indigo-400 hidden lg:flex">
                    <div className="flex gap-1 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <span className="text-sm">Search</span>
                    </div>
                    <span className="text-sm border rounded-sm border-zinc-600 p-1 h-7 ">Ctrl K</span>
                </div>
            </div>
            <div className="space-x-4 w-auto font-semibold text-white/80 hidden lg:flex">
                <a href="#" className=" hover:text-indigo-400">Guide</a>
                <a href="#" className=" hover:text-indigo-400">Config</a>
                <a href="#" className=" hover:text-indigo-400">Plugins</a>
                <a href="#" className="flex  hover:text-gray-600"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <span >Resources</span>
                    <svg class="w-4 h-4 mt-1 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
                {/* Function for hover on item */}
                {isOpen && (
                    <>
                        <ul
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                            className="p-2 absolute right-36 mt-8 w-auto bg-zinc-900 border border-gray-800 rounded-lg z-10 font-semibold"
                        >
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg">Team</li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg">Blog</li>
                            <li className="px-4 mb-3 hover:bg-gray-700/[.2] rounded-lg">Releases</li>
                            <div class="w-full border-t-[0.25px] border-gray-600"></div>
                            <li className="px-4 py-1 mt-3 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>Mastodon</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>Twitter</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>Discord Chat</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>Awesome Vite</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>ViteConf</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>DEV Community</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>Changelog</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>Contributing</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                        </ul>

                    </>
                )}
                <a href="#" className="flex  hover:text-gray-600"
                    onMouseEnter={() => setIsVersionOpen(true)}
                    onMouseLeave={() => setIsVersionOpen(false)}
                >
                    <span>Version</span>
                    <svg class="w-4 h-4 mt-1 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
                {isVersionOpen && (
                    <>
                        <ul
                            onMouseEnter={() => setIsVersionOpen(true)}
                            onMouseLeave={() => setIsVersionOpen(false)}
                            className="p-2 absolute right-12 mt-8 w-auto bg-zinc-900 border border-gray-800 rounded-lg z-10 font-semibold"
                        >
                            <li className="px-4 py-1 mt-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>Vite 4 Docs</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>Vite 3 Docs</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-700/[.2] rounded-lg flex">
                                <span>Vite 2 Docs</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-3 mt-2 ms-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                        </ul>

                    </>
                )}
                <a href="#" className="flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </a>
            </div>
            <div className="lg:hidden flex gap-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
            </div>
        </nav>
    );
}