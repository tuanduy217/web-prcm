"use client"

import React, { useEffect, useState, useRef } from 'react';
import { Home, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter';
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

  const chatBox = [
    {
      id: 1,
      button: "Tôi muốn hiểu bạn hơn!",
      response: "Cảm ơn bạn muốn tìm hiểu tụi mình hơn <3. Vậy thì mình cùng bắt đầu hành trình khám phá nhé!",
      followUp: ["Paracosm là gì?", "Tại sao Paracosm được thành lập?", "Paracosm được thành lập bởi ai nhỉ?"],
      followUpResponse: [
        "Paracosm có nghĩa là một thế giới được tạo ra trong trí tưởng tượng của mỗi con người trong thời thơ ấu. Kế thừa khái niệm đó, Paracosm là một tổ chức nhỏ được lập nên để tạo ra nhiều ký ức đẹp trong tuổi thơ của các bạn nhỏ ở các khu vực vùng sâu vùng xa.",
        "Paracosm hiểu rằng ngoài kia có nhiều điểm trường gặp nhiều điều kiện khó khăn nhưng vẫn chưa được biết đến nhiều để tiếp cận được với những sự hỗ trợ. Tụi mình muốn tìm hiểu thêm về những điểm trường như vậy và làm truyền thông cũng như các chương trình cho các điểm trường, để từ đó các điểm trường sẽ dễ dàng tiếp cận được hơn đến với các mạnh thường quân cũng như các sự hỗ trợ cần thiết cho các em nhỏ trên hành trình đến trường.",
        "Paracosm ban đầu được lập nên bởi Minh My và Tăng Lợi, 2 bạn Graphic Design nhỏ muốn đem những kỹ năng của mình để làm được một điều gì đó cống hiến ngược cho xã hội, đặc biệt là ủng hộ tinh thần các bạn nhỏ trên con đường đến trường của các bạn."
      ],
      finalQuestion: "Tìm hiểu thêm về Paracosm"
    },
    {
      id: 2,
      button: "Cho tôi xem dự án với!",
      response: "Với mục tiêu là muốn truyền đi ngọn lửa đam mê cũng như thắp nên ngọn lửa cho hành trình đến trường của các bạn nhỏ, Paracosm hiện đang có 2 chương trình là \"Truyền lửa ước mơ\" và \"Thắp lửa đêm trăng\".",
      followUp: ["Phóng sự dự án", "Chương trình \"Truyền lửa ước mơ\"", "Chương trình \"Thắp lửa đêm trăng\""],
      followUpResponse: [
        "Xem phóng sự tại đây",
        "TRUYỀN LỬA ƯỚC MƠ được tổ chức với nhiều hoạt động hứng thú, chẳng hạn như học khoa học thường thức qua các thí nghiệm thực tiễn, các workshop thủ công kích thích sự sáng tạo, từ đó tọa nên sự hứng thú với các bạn nhỏ đối với hành trình tiếp thu kiến thức, giữ vững tinh thần đến trường của các bạn.",
        "THẮP LỬA ĐÊM TRĂNG được tổ chức với nhiều hoạt động trong đêm trung thu, với các hoạt động như tự tay làm lồng đèn, phá cỗ đêm trăng rầm. Chương trình được tạo ra với mong muốn tạo ra những kỷ niệm đẹp ghi được dấu ấn trên hành trình đến trường của các bạn nhỏ."
      ],
      finalQuestion: "Tìm hiểu thêm về các dự án"
    },
    {
      id: 3,
      button: "Tôi muốn hỗ trợ",
      response: "Cảm ơn bạn đã quan tâm đến dự án của tụi mình.<br />Do Paracosm là một tổ chức hoạt động cộng đồng nên rất cần sự hỗ trợ từ mọi người.",
      followUp: ["Tôi có thể hỗ trợ những gì?"],
      followUpResponse: [
        "Hiện tại tụi mình vẫn cần hỗ trợ về tài chính cho các dự án chương trình. Ngoài ra tụi mình vẫn nhận hỗ trợ các vật dụng như tập sách, dụng cụ học tập, đồ chơi. Hơn hết thảy, bạn cũng có thể ủng hộ dự án tụi mình thông qua việc chia sẻ về tụi mình để mọi người có thể biết nhiều hơn đến dự án."
      ],
      finalQuestion: "Các cách thức liên hệ",
    },
    {
      id: 4,
      button: "Khác",
      response: "Hmm...Mình có một câu hỏi dành cho bạn: <br />Cái gì sống nếu bạn cho ăn, mà chết nếu bạn cho uống?",
      followUp: ["Động vật", "Cây cối", "Ngọn lửa"],
      followUpResponse: [
        "Huhu không chính xác rồi :< <br />Đáp án đúng phải là \"Ngọn lửa\".<br />\"Ngọn lửa\" cũng là linh vật chính của Paracosm, thể hiện hình ảnh mỗi thành viên của tổ chức đều là một ngọn lửa, truyền đi những đam mê nhiệt huyết đến với các bạn học sinh ở vùng sâu vùng xa.",
        "Huhu không chính xác rồi:<br />Đáp án đúng phải là \"Ngọn lửa\".<br />\"Ngọn lửa\" cũng là linh vật chính của Paracosm, thể hiện hình ảnh mỗi thành viên của tổ chức đều là một ngọn lửa, truyền đi những đam mê nhiệt huyết đến với các bạn học sinh ở vùng sâu vùng xa.",
        "Yes sir chính xác là như vậy rồi.<br />\"Ngọn lửa\" cũng là linh vật chính của Paracosm, thể hiện hình ảnh mỗi thành viên của tổ chức đều là một ngọn lửa, truyền đi những đam mê nhiệt huyết đến với các bạn học sinh ở vùng sâu vùng xa."
      ],
      finalQuestion: ["Tìm hiểu thêm về Paracosm", "Tìm hiểu thêm về các dự án", "Các cách thức liên hệ"]
    }
  ]

  useEffect(() => {
    if (selectedQuestion && selectedItem) {
      const timeout = setTimeout(() => {
        setSelectedResponse(selectedItem.response);
      }, 1000); // delay 1s sau khi câu hỏi hiện xong

      return () => clearTimeout(timeout); // clear nếu unmount
    }
  }, [selectedQuestion, selectedItem]);

  const responseButtons = chatBox.map((item) => ({
    button: item.button,
    response: item.response,
    followUp: item.followUp,
    followUpResponse: item.followUpResponse,
    finalQuestion: item.finalQuestion
  }))

  const showChatResponse =
    selectedItem && selectedFollowUpIndex !== null
      ? selectedItem.followUpResponse[selectedFollowUpIndex]
      : null;

  const delayedQuestionTime = questionTime
    ? new Date(questionTime.getTime() + 1000)
    : null;

  const delayedFollowUpTime = followUpTime
    ? new Date(followUpTime.getTime() + 1000)
    : null;

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

        <div className="flex w-full xl:w-1/2 flex-wrap items-center justify-center space-x-4 sm:space-x-12 bg-[#FFF6EE] backdrop-blur-sm rounded-full px-2 sm:px-8 lg:px-10 py-2 sm:py-4">
          <button className="font-montserrat text-gray-800 hover:text-black font-bold text-sm sm:text-base">Về chúng tôi</button>
          <div className="w-px h-4 sm:h-6 bg-gray-400" />
          <button className="font-montserrat text-gray-800 hover:text-black font-bold text-sm sm:text-base">Các dự án</button>
          <div className="w-px h-4 sm:h-6 bg-gray-400" />
          <button className="font-montserrat text-gray-800 hover:text-black font-bold text-sm sm:text-base">Phóng sự</button>
          <div className="w-px h-4 sm:h-6 bg-gray-400" />
          <button className="font-montserrat text-gray-800 hover:text-black font-bold text-sm sm:text-base">Liên hệ</button>
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
        <div className={`hidden flex flex-col items-center sm:block absolute max-h-[350px] bottom-[15%] lg:bottom-[20%] left-[13%] transform -translate-x-1/2 z-40 ${selectedItem ? 'transform -translate-y-[175%] duration-700' : ''}`}>
          {/* <div className="flex flex-col items-center"> */}
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
                  {/* <div className="absolute w-[200%] h-[20px] bg-white -rotate-12 top-[20px] left-[-50%] z-10" />
                  <div className="absolute w-[200%] h-[20px] bg-white -rotate-12 top-[50px] left-[-50%] z-10" />
                  <div className="absolute w-[200%] h-[20px] bg-white -rotate-12 bottom-[30px] left-[-30%] z-10" />
                  <div className="absolute w-[200%] h-[20px] bg-white -rotate-12 bottom-[70px] left-[-30%] z-10" /> */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute rounded-90 bg-[#FFF6EE] text-black border border-black hover:bg-[#FFF6EE] h-8 w-8 sm:h-10 sm:w-10 top-[13px] left-[17%]
    hover:-translate-y-2 shadow-sm hover:shadow-md active:shadow-inner"
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
                    transition={{ type: "spring", duration: 0.5 }}
                    className={`bg-[#FFF6EE] border border-black rounded-lg p-3 sm:p-4 mb-3 sm:mb-2 relative z-20 transition-all flex flex-col justify-between ${selectedItem ? 'h-[65vh]' : ''}`}
                  >
                    <div className="font-montserrat text-xs lg:text-sm text-[#F9A343] mb-1">
                      Paracosm: {currentTime.toLocaleString('vi-VN')}
                    </div>
                    <p className="font-montserrat text-xs lg:text-sm font-medium leading-relaxed">
                      Hân hạnh được gặp bạn! Tụi mình là Paracosm.<br />
                      Không biết là tụi mình có thể hỗ trợ được gì cho bạn không ha?
                    </p>
                    <AnimatePresence>
                      {selectedQuestion && (
                        <motion.div
                          key="question"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          transition={{ duration: 0.5 }}
                          className="mt-4 bg-[#FFF6EE] text-black self-end max-w-[80%]"
                        >
                          <div className="font-montserrat text-xs lg:text-sm text-[#F9A343] mb-1">
                            Me: {questionTime?.toLocaleString('vi-VN')}
                          </div>
                          <p className="font-montserrat text-xs lg:text-sm font-medium">
                            <Typewriter
                              words={[selectedQuestion]}
                              loop={1}
                              typeSpeed={30}
                              deleteSpeed={50}
                              delaySpeed={1000}
                            />
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

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
                          {/* <p className="text-xs lg:text-sm font-medium" dangerouslySetInnerHTML={{ __html: selectedResponse }} /> */}
                          {selectedResponse && selectedResponse.split('<br />').map((line, idx) => (
                            <span key={idx} className="font-montserrat block text-xs lg:text-sm font-medium">
                              <Typewriter
                                words={[line.trim()]}
                                loop={1}
                                typeSpeed={20}
                                deleteSpeed={50}
                                delaySpeed={1000}
                              />
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {selectedFollowUpIndex !== null && selectedItem && (
                        <motion.div
                          key="followup"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          transition={{ duration: 0.5 }}
                          className="mt-2 bg-[#FFF6EE] text-black self-end max-w-[80%]"
                        >
                          <div className="font-montserrat text-xs lg:text-sm text-[#F9A343] mb-1">
                            Me: {followUpTime?.toLocaleString('vi-VN')}
                          </div>
                          <p className="font-montserrat text-xs lg:text-sm font-medium">
                            <Typewriter
                              words={[selectedItem.followUp[selectedFollowUpIndex]]}
                              loop={1}
                              typeSpeed={30}
                              deleteSpeed={50}
                              delaySpeed={1000}
                            />
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {showChatResponse && (
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
                            words={[showChatResponse]}
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
                        <span className="font-montserrat text-xs lg:text-sm text-orange-600">Chọn phương án bạn yêu thích:</span>
                        <div className="flex flex-wrap justify-end gap-1 sm:gap-2">
                          {selectedItem && selectedItem.followUp && selectedResponse ? (
                            selectedFollowUpIndex === null ? (
                              selectedItem.followUp.map((follow: string, index: number) => (
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
                              // Hiển thị finalQuestion sau khi chọn followUp
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
                                    {selectedItem.finalQuestion}
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
                                {response.button}
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