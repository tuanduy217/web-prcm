"use client"

import React, { useState } from 'react';
import Link from "next/link";
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MainMenuProps {
    lang: 'vi' | 'en'; // Bạn có thể giữ nếu cần truyền vào ban đầu
}

export default function MainMenu({ lang }: MainMenuProps) {
    const [currentLang, setCurrentLang] = useState<'vi' | 'en'>(lang || 'vi');

    return (
        <nav className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 bg-[#FDE1C4] backdrop-blur-sm gap-2 sm:gap-0 z-10 relative">
            {/* HOME button */}
            <div className="flex items-center">
                <Link href="/">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-90 bg-[#FFF6EE] text-black border border-black hover:bg-[#FFF6EE] h-8 w-8 sm:h-10 sm:w-10  
                        hover:-translate-y-1 shadow-sm hover:shadow-md  active:shadow-inner"
                    >
                        <Home className="h-4 w-4 sm:h-5 sm:w-5 transition duration-300 ease-in-out" />
                    </Button>
                </Link>
            </div>

            {/* Main nav items */}
            <div className="flex w-full xl:w-[50%] flex-wrap items-center justify-center space-x-4 sm:space-x-12 bg-[#FFF6EE] backdrop-blur-sm rounded-2xl px-2 sm:px-8 py-2 sm:py-4">
                <Link href="/about">
                    <button className="font-montserrat text-gray-800 hover:text-black font-bold text-sm sm:text-base">
                        {currentLang === 'vi' ? 'Về chúng tôi' : 'About us'}
                    </button>
                </Link>
                <div className="w-px h-4 sm:h-6 bg-gray-400" />
                <button className="font-montserrat text-gray-800 hover:text-black font-bold text-sm sm:text-base">
                    {currentLang === 'vi' ? 'Dự án' : 'Projects'}
                </button>
                <div className="w-px h-4 sm:h-6 bg-gray-400" />
                <button className="font-montserrat text-gray-800 hover:text-black font-bold text-sm sm:text-base">
                    {currentLang === 'vi' ? 'Phóng sự' : 'Reportage'}
                </button>
                <div className="w-px h-4 sm:h-6 bg-gray-400" />
                <button className="font-montserrat text-gray-800 hover:text-black font-bold text-sm sm:text-base">
                    {currentLang === 'vi' ? 'Liên hệ' : 'Contact'}
                </button>
            </div>

            {/* Language switcher */}
            <div className="flex items-center space-x-2">
                <button
                    className={`w-9 h-9 rounded-[10px] bg-[#fdf6f0] border border-black flex items-center justify-center
                        transition duration-300 ease-in-out hover:translate-y-[-5px]
                        shadow-sm hover:shadow-md active:shadow-inner
                        ${currentLang === 'vi' ? 'font-bold underline' : ''}`}
                    onClick={() => setCurrentLang('vi')}
                >
                    Vie
                </button>
                <button
                    className={`w-9 h-9 rounded-[10px] bg-[#fdf6f0] border border-black flex items-center justify-center
                        transition duration-300 ease-in-out hover:translate-y-[-5px]
                        shadow-sm hover:shadow-md active:shadow-inner
                        ${currentLang === 'en' ? 'font-bold underline' : ''}`}
                    onClick={() => setCurrentLang('en')}
                >
                    Eng
                </button>
            </div>
        </nav>
    );
}
