"use client"

import React, { useEffect, useState, useRef } from 'react';
import { Home, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter';
import MainMenu from "@/components/ui/mainMenu"
import chatBox from "@/data/chatBox.json";
import Link from "next/link";
// Assets
import ArtworkLeft from "@/assets/ArtworkLeft.png"
import ArtworkRight from "@/assets/ArtworkRight.png"
import AvatarFire from "@/assets/AvatarFire.png"
import AvatarAdmin from "@/assets/AvatarAdmin.png"


export default function Component() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null)
  const [selectedFollowUpIndex, setSelectedFollowUpIndex] = useState<number | null>(null)
  const [followUpSelected, setFollowUpSelected] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [questionTime, setQuestionTime] = useState<Date | null>(null);
  const [followUpTime, setFollowUpTime] = useState<Date | null>(null);
  const [botTime, setBotTime] = useState<Date | null>(null);
  const [isOnline, setIsOnline] = useState(true);
  const [showBotResponse, setShowBotResponse] = useState(false);
  const [lang, setLang] = useState<'vi' | 'en'>('vi');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => {
      setIsOnline(false);
      alert("Bạn đang offline. Vui lòng kiểm tra kết nối mạng!");
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSelectResponse = (item: any) => {
    setSelectedItem(item);
    setSelectedQuestion(item.button);
    setSelectedResponse(null); // clear trước
    setSelectedFollowUpIndex(null);
    setQuestionTime(new Date());
    setFollowUpTime(null);
    setBotTime(null);
  };

  const handleFollowUp = (index: number) => {
    setSelectedFollowUpIndex(index);
    setFollowUpSelected(true);
    setFollowUpTime(new Date());
    setBotTime(null);
  };

  const handleGoBack = () => {
    if (selectedFollowUpIndex !== null) {
      // Nếu đang ở followUp, quay lại chọn followUp
      setSelectedFollowUpIndex(null);
      setFollowUpSelected(false);
      setBotTime(null);
      setFollowUpTime(null);
    } else if (selectedResponse) {
      // Nếu đang ở response, quay lại chọn câu hỏi
      setSelectedItem(null);
      setSelectedQuestion(null);
      setSelectedResponse(null);
      setQuestionTime(null);
    }
  };

  useEffect(() => {
    if (selectedQuestion && selectedItem) {
      const timeout = setTimeout(() => {
        setSelectedResponse(selectedItem.response);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [selectedQuestion, selectedItem]);

  useEffect(() => {
    if (selectedFollowUpIndex !== null && selectedItem) {
      setShowBotResponse(false);
      const timeout = setTimeout(() => setShowBotResponse(true), 2000);
      return () => clearTimeout(timeout);
    }
  }, [selectedFollowUpIndex, selectedItem]);

  const responseButtons = chatBox.map((item) => ({
    button: item.button,
    response: item.response,
    followUp: item.followUp,
    followUpResponse: item.followUpResponse,
    finalQuestion: item.finalQuestion,
    engButton: item.engButton,
    engResponse: item.engResponse,
    engFollowUp: item.engFollowUp,
    engFollowUpResponse: item.engFollowUpResponse,
    engFinalQuestion: item.engFinalQuestion
  }))

  const showChatResponse =
    selectedItem && selectedFollowUpIndex !== null
      ? selectedItem.followUpResponse[selectedFollowUpIndex]
      : null;

  const addDelay = (date: Date | null, ms: number = 2000) =>
    date ? new Date(date.getTime() + ms) : null;

  const delayedQuestionTime = addDelay(questionTime);
  const delayedFollowUpTime = addDelay(followUpTime);

  return (
    <div className="min-h-screen relative bg-[#FDE1C4] overflow-hidden">

      {/* --- Navigation --- */}
      <MainMenu lang={lang} />

      {/* --- Background Artwork --- */}
      <div className="relative z-0">
        <div className="hidden lg:block absolute top-[20%] left-[25%] lg:top-[20%] lg:left-[10%] lg:w-[12%] z-0">
          <Image src={ArtworkLeft} alt="Artwork Left" className="block" priority />
        </div>
        <div className="absolute top-[10%] mx-5 lg:top-[20%] lg:right-[5%] w-auto lg:w-[25%] z-0">
          <Image src={ArtworkRight} alt="Artwork Right" className="block" priority />
        </div>
      </div>


      <div className="absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img src={AvatarFire.src} alt="Avatar" className="w-32 xl:w-[75%] h-auto" />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full">
        <div className="min-h-[380px] lg:min-h-[250px] bg-[#FED07A] relative z-10" />
      </div>

      {/* --- Placeholder Chatbox wrapper (z-10) --- */}
      <div className='flex flex-col items-center w-full z-30'>
        {/* AvatarAdmin */}
        <div className={`hidden flex-col items-center sm:block absolute max-h-[350px] bottom-[15%] lg:bottom-[20%] left-[13%] transform -translate-x-1/2 z-40 ${selectedItem ? 'transform -translate-y-[175%] duration-700' : ''}`}>
          <div className="w-48 h-48 rounded-full border-[12px] border-[#F78E1E] bg-[#FFF6EE] flex items-center justify-center">
            <Image src={AvatarAdmin} alt="Avatar Admin" className="block" priority />
            <div className="font-montserrat absolute bottom-[-10%] px-3 py-1 bg-white rounded-xl border border-black shadow text-sm font-medium text-black w-[40%]">
              @admin
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* Card Chatbox */}

        <div className="absolute bottom-[2%] z-30 w-[90%] overflow-hidden">
          <Card className="bg-[#FDE1C4] backdrop-blur-sm border-2 border-black w-full">
            <CardContent className="p-3 sm:p-4 lg:p-3">
              <div className="flex flex-col sm:flex-row sm:justify-center sm:items-end sm:left-[12%] h-full">
                <div className="flex items-center sm:flex-col sm:items-start space-x-3 sm:space-x-0 sm:space-y-2 w-full sm:w-auto">
                  <h2 className="text-base font-bold text-black sm:hidden">PARACOSM CHATBOX</h2>
                  <div className="flex flex-col sm:items-center z-30">
                    <h2 className="hidden font-grotesk sm:block text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3 lg:mb-4 lg:ml-10">
                      PARACOSM <br /> CHATBOX
                    </h2>
                  </div>
                </div>

                <div className="w-full lg:w-[80%] sm:ml-auto">
                  {/* Decorative stripes */}
                  <div className="absolute w-[200%] h-[20px] bg-white -rotate-12 top-[20px] left-[-50%] z-10" />
                  <div className="absolute w-[200%] h-[20px] bg-white -rotate-12 top-[50px] left-[-50%] z-10" />
                  <div className="absolute w-[200%] h-[20px] bg-white -rotate-12 bottom-[30px] left-[-30%] z-10" />
                  <div className="absolute w-[200%] h-[20px] bg-white -rotate-12 bottom-[70px] left-[-30%] z-10" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute rounded-90 bg-[#FFF6EE] text-black border border-black hover:bg-[#FFF6EE] h-8 w-8 sm:h-10 sm:w-10 top-[13px] left-[17%]
                        hover:-translate-y-2 shadow-sm hover:shadow-md active:shadow-inner ${selectedItem ? '' : 'hidden'}`}
                    onClick={handleGoBack}
                  >
                    <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5 transition duration-300 ease-in-out z-50" />
                  </Button>
                  <motion.div
                    initial={{ height: 175, scale: 1 }}
                    animate={
                      selectedItem
                        ? { height: 570, scale: 1 }
                        : { height: 175, scale: 1 }
                    }
                    transition={{ type: "spring", duration: 0.2 }}
                    className={`bg-[#FFF6EE] border border-black rounded-lg p-3 sm:p-4 mb-3 sm:mb-2 relative z-20 transition-all flex flex-col justify-between ${selectedItem ? 'h-[65vh]' : ''}`}
                  >
                    <div className="font-montserrat text-xs lg:text-sm text-[#F9A343] mb-1">
                      Paracosm: {currentTime.toLocaleString('vi-VN')}
                    </div>

                    <p
                      className="font-montserrat text-xs lg:text-sm font-medium leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html:
                          lang === 'vi'
                            ? 'Hân hạnh được gặp bạn! Tụi mình là Paracosm.<br />Không biết là tụi mình có thể hỗ trợ được gì cho bạn không ha?'
                            : 'Nice to meet you! We are Paracosm.<br />How can we assist you today?'
                      }}
                    />
                    {/* Question 1 */}
                    <AnimatePresence>
                      {selectedQuestion && (
                        <motion.div
                          key="question"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          transition={{ duration: 0.5 }}
                          className="mt-4 bg-[#FFF6EE] text-black self-end text-right max-w-[80%]"
                        >
                          <div className="font-montserrat text-xs lg:text-sm text-[#F9A343] mb-1">
                            Me: {questionTime?.toLocaleString('vi-VN')}
                          </div>
                          <p className="font-montserrat text-xs lg:text-sm font-medium">
                            <Typewriter
                              words={[lang === 'vi' ? selectedQuestion : selectedItem?.engButton]}
                              loop={1}
                              typeSpeed={30}
                              deleteSpeed={50}
                              delaySpeed={1000}
                            />
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Answer 1 */}
                    <AnimatePresence>
                      {selectedResponse && (
                        <motion.div
                          key="user"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 1 }}
                          className="font-montserrat mt-4 bg-[#FFF6EE] text-black self-start max-w-[80%]"
                        >
                          <div className="font-montserrat text-xs lg:text-sm text-[#F9A343] mb-1">
                            Paracosm: {delayedQuestionTime?.toLocaleString('vi-VN')}
                          </div>
                          {selectedResponse && (
                            <span className="font-montserrat block text-xs lg:text-sm font-medium">
                              <Typewriter
                                words={[
                                  lang === 'vi'
                                    ? selectedResponse
                                    : selectedItem?.engResponse || ''
                                ]}
                                loop={1}
                                typeSpeed={20}
                                deleteSpeed={50}
                                delaySpeed={1000}
                              />
                            </span>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Question 2 */}
                    <AnimatePresence>
                      {selectedFollowUpIndex !== null && selectedItem && (
                        <motion.div
                          key="followup"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          transition={{ duration: 0.5 }}
                          className="mt-2 bg-[#FFF6EE] text-black text-right self-end max-w-[80%]"
                        >
                          <div className="font-montserrat text-xs lg:text-sm text-[#F9A343] mb-1">
                            Me: {followUpTime?.toLocaleString('vi-VN')}
                          </div>
                          <p className="font-montserrat text-xs lg:text-sm font-medium">
                            <Typewriter
                              // words={[selectedItem.followUp[selectedFollowUpIndex]]}
                              words={[
                                lang === 'vi'
                                  ? selectedItem.followUp[selectedFollowUpIndex]
                                  : selectedItem.engFollowUp[selectedFollowUpIndex]
                              ]}
                              loop={1}
                              typeSpeed={30}
                              deleteSpeed={50}
                              delaySpeed={1000}
                            />
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Answer 2 */}
                    <AnimatePresence>
                      {showBotResponse && showChatResponse && (
                        <motion.div
                          key="bot"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 30 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="mt-2 bg-[#FFF6EE] text-black max-w-[80%]"
                        >
                          <div className="font-montserrat text-xs lg:text-sm text-[#F9A343] mb-1">
                            Paracosm: {delayedFollowUpTime?.toLocaleString('vi-VN')}
                          </div>
                          <p className="font-montserrat text-xs lg:text-sm font-medium" />
                          <Typewriter
                            words={[
                              lang === 'vi'
                                ? (selectedFollowUpIndex !== null ? showChatResponse : "")
                                : (selectedFollowUpIndex !== null && selectedItem
                                  ? selectedItem.engFollowUpResponse[selectedFollowUpIndex]
                                  : "")
                            ]}
                            loop={1}
                            typeSpeed={20}
                            deleteSpeed={50}
                            delaySpeed={1000}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
                    <div className="flex w-full justify-end mt-auto">
                      <div className="flex flex-col items-end gap-1 sm:gap-2 text-right">
                        <span className="font-montserrat text-xs lg:text-sm text-orange-600">
                          {lang === 'vi' ? "Chọn phương án bạn yêu thích:" : "Choose your favorite option:"}
                        </span>
                        <div className="flex flex-wrap justify-end gap-1 sm:gap-2">
                          {selectedItem && selectedItem.followUp && selectedResponse ? (
                            selectedFollowUpIndex === null ? (
                              (lang === 'vi' ? selectedItem.followUp : selectedItem.engFollowUp).map((follow: string, index: number) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  className="font-montserrat text-xs lg:text-sm text-black border-black hover:bg-[#FFF6EE] hover:border-black"
                                  onClick={() => handleFollowUp(index)}
                                >
                                  {follow}
                                </Button>
                              ))
                            ) : (
                              // Final Question
                              Array.isArray(selectedItem.finalQuestion)
                                ? selectedItem.finalQuestion.map((q: string, idx: number) => (
                                  <Button
                                    key={idx}
                                    variant="outline"
                                    size="sm"
                                    className="font-montserrat text-xs lg:text-sm text-black border-black hover:bg-[#FFF6EE] hover:border-black"
                                  >
                                    {q}
                                  </Button>
                                ))
                                : (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs lg:text-sm text-black border-black hover:bg-[#FFF6EE] hover:border-black"
                                  >
                                    {lang === 'vi' ? selectedItem.finalQuestion : selectedItem.engFinalQuestion}
                                  </Button>
                                )
                            )
                          ) : (
                            responseButtons.map((response, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                className="text-xs lg:text-sm text-black border-black hover:bg-[#FFF6EE] hover:border-black"
                                onClick={() => handleSelectResponse(response)}
                              >
                                {lang === 'vi' ? response.button : response.engButton}
                              </Button>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}