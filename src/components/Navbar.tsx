"use client"

import { useState } from "react"

export default function Navbar() {

    const [tombolEvent, SetTombolEvent] = useState(false);


    const handleEvent = () => {
        SetTombolEvent(!tombolEvent)
    }

    const events = [
        { name: "Testing" },
        { name: "Testing2" }
    ]

    return (
        <div className="w-full">
            <nav className="flex justify-between w-full h-16 items-center shadow-md px-10 gap-8">
                <img src="#" alt="logo" className="h-10 border w-24" />
                <div className="hidden md:flex w-full justify-between">
                    <a href="">Learning Path</a>
                    <div className="flex gap-2">
                        <a href="">
                            Program
                        </a>
                        <button onClick={handleEvent}>
                            {tombolEvent ? 0 : 1}
                        </button>
                    </div>
                    <a href="">Evens</a>
                </div>
                <div className="flex gap-2">
                    <a href="" className="bg-yellow-300 py-3 px-5 rounded-md font-bold hover:bg-yellow-500 transition duration-200">Masuk</a>
                    <a href="" className="bg-white py-3 px-5 rounded-md font-bold hover:bg-gray-100 transition duration-200-" >Daftar</a>
                </div>
            </nav>
            <div className={`w-full flex justify-center transition-all duration-500 ease-in-out transform ${tombolEvent ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}>
                {
                    tombolEvent && (
                        <div className="absolute w-80 border shadow-sm mt-1 bg-white">
                            {events.map((item, index) => (
                                <div key={index} className="px-4 py-2 hover:bg-gray-100 border-b last:border-none">
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}