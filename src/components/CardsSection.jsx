import React from "react";

export default function CardsSection() {
    const cards = [
        {
            icon: "💡",
            title: "Instant Server Start",
            description: "On demand file serving over native ESM, no bundling required!",
        },
        {
            icon: "⚡",
            title: "Lightning Fast HMR",
            description: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
        },
        {
            icon: "🛠️",
            title: "Rich Features",
            description: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
        },
        {
            icon: "📦",
            title: "Optimized Build",
            description: "Pre-configured Rollup build with multi-page and library mode support.",
        },
        {
            icon: "🔩",
            title: "Universal Plugins",
            description: "Rollup-superset plugin interface shared between dev and build.",
        },
        {
            icon: "🔑",
            title: "Fully Typed APIs",
            description: "Flexible programmatic APIs with full TypeScript typing.",
        },
    ];

    return (
        <>
            <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#202127] rounded-xl w-[300px] h-auto flex flex-col p-4 overflow-hidden"
                        >
                            <div className="flex justify-center items-center w-16 h-16 bg-[#65758529] rounded-xl mb-3">
                                <span className="text-2xl">{card.icon}</span>
                            </div>
                            <div className="flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                                <p className="text-gray-500 text-sm">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto mt-24">
                <div className="w-full h-0.5 bg-black"></div>
            </div>
        </>
    );
}
