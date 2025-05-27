"use client"

import { useState } from "react"
import { Home, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

// Assets
import ArtworkLeft from "@/assets/ArtworkLeft.png"
import ArtworkRight from "@/assets/ArtworkRight.png"
import AvatarFire from "@/assets/AvatarFire.png"
import AvatarAdmin from "@/assets/AvatarAdmin.png"

export default function Component() {
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null)

  const responseButtons = [
    "Tôi muốn hiểu bạn hơn",
    "Cho tôi xem dự án với",
    "Tôi muốn hỗ trợ",
    "Khác",
  ]

  return (
    <div className="min-h-screen relative bg-[#FDE1C4] overflow-hidden">

      {/* --- Navigation --- */}
      <nav className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 bg-[#FDE1C4] backdrop-blur-sm gap-2 sm:gap-0 z-10 relative">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-90 bg-[#FFF6EE] text-black border border-black hover:bg-[#FFF6EE] h-8 w-8 sm:h-10 sm:w-10  
             hover:-translate-y-1 shadow-sm hover:shadow-md  active:shadow-inner"
          >
            <Home
              className="h-4 w-4 sm:h-5 sm:w-5 transition duration-300 ease-in-out"
            />

          </Button>
        </div>

        <div className="flex w-full xl:w-2/5 2xl:w-1/2 flex-wrap items-center justify-center space-x-4 sm:space-x-16 bg-[#FFF6EE] backdrop-blur-sm rounded-full px-2 sm:px-8 lg:px-10 py-2 sm:py-4">
          <button className="text-gray-800 hover:text-black font-bold text-sm sm:text-base">Về chúng tôi</button>
          <div className="w-px h-4 sm:h-6 bg-gray-400" />
          <button className="text-gray-800 hover:text-black font-bold text-sm sm:text-base">Các dự án</button>
          <div className="w-px h-4 sm:h-6 bg-gray-400" />
          <button className="text-gray-800 hover:text-black font-bold text-sm sm:text-base">Phóng sự</button>
          <div className="w-px h-4 sm:h-6 bg-gray-400" />
          <button className="text-gray-800 hover:text-black font-bold text-sm sm:text-base">Liên hệ</button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="w-9 h-9 rounded-[10px] bg-[#fdf6f0] border border-black flex items-center justify-center 
            transition duration-300 ease-in-out hover:translate-y-[-5px]
            shadow-sm hover:shadow-md active:shadow-inner transition-all duration-150"
          >
            Vie
          </button>
          <button
            className="w-9 h-9 rounded-[10px] bg-[#fdf6f0] border border-black flex items-center justify-center 
            transition duration-300 ease-in-out hover:translate-y-[-5px]
            shadow-sm hover:shadow-md active:shadow-inner transition-all duration-150"
          >
            Eng
          </button>
        </div>
      </nav>

      {/* --- Background Artwork --- */}
      <div className="relative z-0 min-h-[400px]">
        <div className="hidden lg:block absolute top-[20%] lg:top-[20%] left-[25%] lg:left-[15%] xl:left-[10%] w-1/2 lg:w-auto z-0">
          <Image src={ArtworkLeft} alt="Artwork Left" className="block" priority />
        </div>
        <div className="absolute top-[10%] mx-5 lg:top-[20%] lg:right-[15%] xl:right-[5%] w-auto z-0">
          <Image src={ArtworkRight} alt="Artwork Right" className="block" priority />
        </div>
      </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img src={AvatarFire.src} alt="Avatar" className="w-32 lg:w-full h-auto" />
      </div>


      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full">
        <div className="min-h-[380px] lg:min-h-[350px] bg-[#FED07A] relative z-10" />
      </div>

      {/* --- Placeholder Chatbox wrapper (z-10) --- */}
      <div className="hidden sm:block absolute max-h-[350px] bottom-[15%] lg:bottom-[20%] left-[12%] transform -translate-x-1/2 z-40 w-[90%]">
        <div className="flex flex-col items-center space-y-1">
          <div className="w-48 h-48 rounded-full border-[6px] border-orange-500 bg-[#FFF6EE] flex items-center justify-center">
            <Image src={AvatarAdmin} alt="Avatar Admin" className="block" priority />
          </div>
          <div className="px-3 py-1 bg-white rounded-full border border-black shadow text-sm font-medium text-black">
            @admin
          </div>
        </div>
      </div>

      <div className="absolute max-h-[350px] bottom-[5%] lg:bottom-[4%] left-1/2 transform -translate-x-1/2 z-30 w-[90%]">
        <Card className="bg-[#FDE1C4] backdrop-blur-sm border-2 border-orange-300">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            {/* <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4"> */}
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-end sm:left-[12%] h-full">
              {/* Avatar + Tiêu đề trên mobile (ngang hàng) */}
              <div className="flex items-center sm:flex-col sm:items-start space-x-3 sm:space-x-0 sm:space-y-2 w-full sm:w-auto">
                <h2 className="text-base font-bold text-black sm:hidden">PARACOSM CHATBOX</h2>
                <div className="flex flex-col sm:items-center">

                  {/* <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 mt-1 sm:mt-0">
                    <RotateCcw className="hidden lg:block sm:h-3 sm:w-3 lg:h-4 lg:w-4" />
                  </Button> */}
                  <h2 className="hidden sm:block text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3 lg:mb-4 lg:ml-10">
                    PARACOSM <br />
                    CHATBOX
                  </h2>
                </div>
              </div>

              {/* Nội dung còn lại */}
              <div className="w-full lg:w-[80%] sm:ml-auto">
                {/* Tiêu đề trên sm trở lên */}
                <div className="bg-[#FFF6EE] sm:min-h-[200px] rounded-lg p-3 sm:p-4 mb-3 sm:mb-2 relative">
                  <div className="text-xs lg:text-lg text-gray-600 mb-1">Paracosm, time: 2 days</div>
                  <p className="text-xs font-bold lg:text-lg text-black leading-relaxed">
                    Hân hạnh được gặp bạn! Tụi mình là Paracosm.<br />
                    Không biết là tụi mình có thể hỗ trợ được gì cho bạn không ha?
                  </p>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full" />
                  <div className="flex w-full justify-end">
                    <div className="flex flex-col items-end gap-1 sm:gap-2 text-right">
                      <span className="text-xs lg:text-lg text-orange-600">Chọn phương án bạn yêu thích</span>
                      <div className="flex flex-wrap justify-end gap-1 sm:gap-2">
                        {responseButtons.map((button, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="lg"
                            className="rounded-full border-black bg-[#FFF6EE] hover:bg-white text-black text-xs lg:text-lg h-7 sm:h-8 px-2 sm:px-3
                            transition duration-300 ease-in-out hover:translate-y-[-5px]
                            shadow-sm hover:shadow-md active:shadow-inner transition-all duration-150"
                            onClick={() => setSelectedResponse(button)}
                          >
                            {button}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
