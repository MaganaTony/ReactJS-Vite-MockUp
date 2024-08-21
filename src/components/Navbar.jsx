import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVersionOpen, setIsVersionOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`flex justify-between p-5 sticky top-0 z-50 transition-colors duration-300 ${
                isScrolled ? "bg-zinc-900" : "bg-transparent"
            }`}
        >
            <div className="flex text-lg font-semibold text-white">
                <img src="/vite.svg" className="h-7 mx-2" alt="Vite logo" />
                <span>Vite</span>
                <div className="ms-8 bg-zinc-950/45 w-auto rounded-lg h-10 p-1 gap-4 text-white/50 border border-zinc-950 hover:border-indigo-400 hidden lg:flex">
                    <div className="flex gap-1 p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth=".5"
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                        <span className="text-sm">Search</span>
                    </div>
                    <span className="text-sm border rounded-sm border-zinc-600 p-1 h-7">Ctrl K</span>
                </div>
            </div>
            <div className="space-x-4 w-auto font-semibold text-white/80 hidden lg:flex">
                <a href="#" className="hover:text-indigo-400">
                    Guide
                </a>
                <a href="#" className="hover:text-indigo-400">
                    Config
                </a>
                <a href="#" className="hover:text-indigo-400">
                    Plugins
                </a>
                <a
                    href="#"
                    className="flex hover:text-gray-600"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <span>Resources</span>
                    <svg
                        className="w-4 h-4 mt-1 ms-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </a>
                {isOpen && (
                    <ul
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        className="p-2 absolute right-36 mt-8 w-auto bg-zinc-900 border border-gray-800 rounded-lg z-10 font-semibold"
                    >
                        {/* Dropdown items */}
                    </ul>
                )}
                <a
                    href="#"
                    className="flex hover:text-gray-600"
                    onMouseEnter={() => setIsVersionOpen(true)}
                    onMouseLeave={() => setIsVersionOpen(false)}
                >
                    <span>Version</span>
                    <svg
                        className="w-4 h-4 mt-1 ms-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </a>
                {isVersionOpen && (
                    <ul
                        onMouseEnter={() => setIsVersionOpen(true)}
                        onMouseLeave={() => setIsVersionOpen(false)}
                        className="p-2 absolute right-12 mt-8 w-auto bg-zinc-900 border border-gray-800 rounded-lg z-10 font-semibold"
                    >
                        {/* Dropdown items */}
                    </ul>
                )}
                <a href="#" className="flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                </a>
            </div>
            <div className="lg:hidden flex gap-7">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                </svg>
            </div>
        </nav>
    );
}
