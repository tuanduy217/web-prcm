"use client";
import React, { useState, useEffect } from 'react';
import MainMenu from "@/components/ui/mainMenu";
import Image from "next/image";
import Tranh from "@/assets/About_Tranh.png";
import GioiThieuChung from "@/assets/GioiThieuChung.png"
import GiaTriCotLoi from "@/assets/GiaTriCotLoi.png"
import Program1 from "@/assets/Program1.png"
import Program2 from "@/assets/Program2.png"
import Program3 from "@/assets/Program3.png"
import ThapLuaDemTrang from "@/assets/ThapLuaDemTrang.png"
import SeLuaThuanBinh from "@/assets/SeLuaThuanBinh.png"
import BotAbout from "@/assets/BotAbout.png"
import Eye from "@/assets/Eye.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Footer from '@/components/ui/footer';

const programs = [
    {
        title: "TRUYỀN LỬA ƯỚC MƠ",
        nameImg: GiaTriCotLoi,
        image: Program1,
        color: "text-[#F25C05]",
        desc: 'Chương trình "Truyền lửa ước mơ 1" được tổ chức tại Trường Tiểu học Thuận Bình (điểm T10), ấp T3, xã Thuận Bình, huyện Thạnh Hóa, tỉnh Long An.',
    },
    {
        title: "THẮP LỬA ĐÊM TRĂNG",
        nameImg: ThapLuaDemTrang,
        image: Program2,
        color: "text-[#F26F04]",
        desc: 'Chương trình "Thắp lửa đêm trăng" được tổ chức tại Lớp học tình thương đồn Biên phòng Tuyên Bình, xã Tuyên Bình, huyện Vĩnh Hưng, tỉnh Long An.',
    },
    {
        title: "SẺ LỬA THUẬN BÌNH",
        nameImg: SeLuaThuanBinh,
        image: Program3,
        color: "text-[#E252B5]",
        desc: 'Chương trình "Thắp lửa đêm trăng - sẻ lửa" được tổ chức tại Trường Tiểu học Thuận Bình (Điểm T10), ấp T3, xã Thuận Bình, huyện Thạnh Hóa, tỉnh Long An.',
    },
];

export default function AboutPage() {
    const [lang, setLang] = useState<'vi' | 'en'>('vi');
    const [eyeDirection, setEyeDirection] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const offsetX = e.clientX - centerX;
            const offsetY = e.clientY - centerY;

            // Giới hạn khoảng di chuyển của mắt, ví dụ ±8px
            const limit = 8;
            const clampedX = Math.max(-limit, Math.min(limit, offsetX / 50));
            const clampedY = Math.max(-limit, Math.min(limit, offsetY / 50));

            setEyeDirection({ x: clampedX, y: clampedY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
        <div className="min-h-screen relative bg-[#FDE1C4] overflow-hidden">
            <section className="h-screen bg-[#FDE1C4]">
                <MainMenu lang={lang} />

                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-6 lg:px-16 py-10 text-black">
                    {/* Left section */}
                    <div className="flex flex-col justify-between p-6 bg-[#FFFFFF] border border-[#FDE1C4] rounded-xl shadow-sm w-full lg:w-1/2">
                        <div>
                            <h1 className="text-3xl font-black font-montserrat">PARACOSM</h1>
                            <p className="italic text-sm text-gray-500">Ignite the light</p>
                            <p className="mt-4 text-sm text-justify leading-relaxed">
                                Paracosm là tổ chức xã hội được thành lập nhằm mục đích hỗ trợ tinh thần các em học sinh tiểu học trên con đường đến trường,
                                đặc biệt là học sinh ở khu vực vùng sâu vùng xa gần biên giới, những điểm trường hoặc lớp học tình nguyện chưa được đánh dấu
                                trên bản đồ.
                            </p>
                            <p className="mt-4 text-sm text-justify leading-relaxed">
                                Paracosm là nơi tập hợp những người trẻ có một mục đích chung và những đôi chân luôn sẵn sàng đi xa – để đến, lắng nghe và đồng hành cùng những câu chuyện nhỏ bé nhưng đầy nghị lực. Và nếu bạn từng ước mơ làm điều gì đó thật ý nghĩa, Paracosm luôn sẵn lòng dang tay chào đón. Vì đôi khi, một nụ cười trẻ thơ chính là phần thưởng đẹp nhất cho những hành trình dài.
                            </p>
                        </div>

                        <div className="mt-6 border-t pt-4">
                            <p className="text-center text-sm font-medium text-gray-600 mb-2">Các trang mạng xã hội</p>
                            <div className="flex justify-center gap-6 text-2xl">
                                <a href="https://www.facebook.com/paracosmkeeper" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7F00] transition">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://www.instagram.com/bonbon.sicula48/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7F00] transition">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7F00] transition">
                                    <FontAwesomeIcon icon={faTiktok} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="flex flex-col w-full lg:w-1/2 lg:px-16 justify-between gap-6">
                        {/* Character Image */}
                        <div className="relative rounded-xl overflow-hidden shadow-sm border border-black">
                            <Image
                                src={Tranh}
                                alt="Paracosm Mascot"
                                className="object-cover w-full sm:h-56"
                                priority
                            />

                            {/* Bot ảnh chính */}
                            <Image
                                src={BotAbout}
                                alt="BotAbout"
                                className="absolute bottom-0 right-32 w-60 h-60 object-contain drop-shadow-xl"
                                priority
                            />

                            {/* Mắt trái */}
                            <div
                                className="absolute"
                                style={{
                                    bottom: "7rem", // khoảng 112px
                                    right: "16rem", // khoảng 256px
                                    width: "24px",
                                    height: "24px",
                                    transform: `translate(${eyeDirection.x}px, ${eyeDirection.y}px)`,
                                }}
                            >
                                <Image
                                    src={Eye}
                                    alt="Eye Left"
                                    className="w-full h-full object-contain drop-shadow-xl"
                                    priority
                                />
                            </div>

                            {/* Mắt phải */}
                            <div
                                className="absolute"
                                style={{
                                    bottom: "7rem", // khoảng 112px
                                    right: "13.5rem", // khoảng 216px
                                    width: "24px",
                                    height: "24px",
                                    transform: `translate(${eyeDirection.x}px, ${eyeDirection.y}px)`,
                                }}
                            >
                                <Image
                                    src={Eye}
                                    alt="Eye Right"
                                    className="w-full h-full object-contain drop-shadow-xl"
                                    priority
                                />
                            </div>
                        </div>


                        {/* Menu Section */}
                        <div className="bg-white border border-black rounded-xl p-4 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-black text-center mb-4">MỤC LỤC</h2>
                            <div className="flex flex-col items-center gap-3">
                                {[
                                    { label: "GIỚI THIỆU CHUNG VỀ PARACOSM", id: "gioi-thieu", color: "#F78E1E", hover: "#e57e10" },
                                    { label: "GIÁ TRỊ CỐT LÕI CỦA PARACOSM", id: "gia-tri-cot-loi", color: "#FDB62C", hover: "#e5a81f" },
                                    { label: "CHƯƠNG TRÌNH CỦA PARACOSM", id: "chuong-trinh", color: "#F78E1E", hover: "#e57e10" },
                                ].map(({ label, id, color, hover }) => (
                                    <button
                                        key={id}
                                        className="w-[70%] text-white rounded-full py-2 px-4 font-bold shadow transition"
                                        style={{ backgroundColor: color }}
                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = hover}
                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = color}
                                        onClick={() => {
                                            const section = document.getElementById(id);
                                            section?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="gioi-thieu"
                className="h-screen bg-[#F78E1E] text-white px-6 lg:px-24 py-10 flex flex-col gap-10"
            >
                {/* Tiêu đề nằm trên cùng, căn giữa */}
                <h1 className="text-4xl font-extrabold text-center font-montserrat">
                    GIỚI THIỆU CHUNG
                </h1>

                {/* 2 cột nội dung */}
                <div className="flex flex-col lg:flex-row items-center gap-10 flex-1">
                    {/* Cột trái: logo + ảnh */}
                    <div className="flex flex-col items-center justify-center lg:w-1/3 w-full">
                        <div className="text-center w-full">
                            <p className="text-[48px] font-black leading-none mb-1">prcm</p>
                            <p className="-mt-3 text-sm tracking-widest text-white">- Paracosm -</p>
                        </div>
                        <Image
                            src={GioiThieuChung}
                            alt="Paracosm Mascot"
                            className="object-cover w-[70%] mt-4 rounded-md shadow"
                            priority
                        />
                    </div>

                    {/* Cột phải: nội dung */}
                    <div className="lg:w-2/3 w-full text-sm space-y-6 leading-relaxed">
                        <div>
                            <p className="font-bold text-2xl text-white">+ TẦM NHÌN</p>
                            <p className='text-justify'>
                                <strong>Paracosm</strong> mang trong mình một tầm nhìn giản dị mà sâu xa: Tầm nhìn của Paracosm đã được
                                nhắc đến ngay từ cái tên: trở thành một nơi mà mọi trẻ em – dù ở đâu, dù hoàn cảnh thế nào –
                                đều có cơ hội được học tập, vui chơi và lớn lên trong tình thương yêu. Tụi mình tin rằng tuổi thơ
                                không nên bị giới hạn bởi vị trí địa lý hay điều kiện sống. Dù là giữa phố thị nhộn nhịp hay trong
                                một ngôi làng nhỏ nơi vùng biên, những giấc mơ non nớt đều đáng được nuôi dưỡng như nhau
                            </p>
                        </div>

                        <div>
                            <p className="font-bold text-2xl text-white">+ MỤC TIÊU</p>
                            <p className='text-justify'>
                                <strong>Paracosm</strong> hướng tới việc có thể tạo ra những thay đổi bền vững và lâu dài, truyền lửa cho các em
                                thông qua các hoạt động vừa chơi vừa học. Tụi mình nghĩ rằng từ đó, niềm yêu thích học tập
                                trong các em sẽ dần được thắp sáng, giữ vững niềm tin đến trường mặc cho vẫn còn gặp những
                                khó khăn. Đó là một tương lai nơi các em không phải vượt hàng chục cây số để đến trường,
                                không phải bỏ học vì thiếu áo ấm hay sách vở
                            </p>
                        </div>

                        <hr className="border-white/70" />

                        <p className='text-justify'>
                            Tụi mình tin rằng mọi việc đều được nuôi dưỡng bởi tình yêu thương, sự đồng cảm và mỗi người
                            đều có thể góp phần tạo nên sự thay đổi. Paracosm không phải là một phép màu – nhưng chúng
                            tôi tin rằng, nếu đủ nhiều người cùng chung tay, thì thế giới tốt đẹp hơn cho trẻ em không phải
                            là điều xa vời
                        </p>
                        <p className='text-justify'>
                            Với <strong>Paracosm</strong>, tầm nhìn và mục tiêu không chỉ là đích đến – mà là một hành trình, nơi từng bước
                            chân, từng nụ cười của trẻ nhỏ là nguồn động lực để tiếp tục đi xa hơn nữa.
                        </p>
                    </div>
                </div>
            </section>



            <section
                id="gia-tri-cot-loi"
                className="h-screen bg-[#FDB62C] text-white px-6 lg:px-24 py-10 flex flex-col gap-6 justify-center"
            >
                {/* Tiêu đề chính */}
                <h1 className="text-4xl font-extrabold text-center font-montserrat">
                    GIÁ TRỊ CỐT LÕI
                </h1>

                {/* Hình ảnh chính */}
                <div className="flex justify-center">
                    <Image
                        src={GiaTriCotLoi}
                        alt="Truyền Lửa Ước Mơ"
                        className="w-[450px]"
                    />
                </div>

                {/* Nội dung mô tả */}
                <div className="max-w-4xl mx-auto text-sm leading-relaxed space-y-4">
                    <p className='text-justify'>
                        <strong>Giá trị cốt lõi</strong> của <strong>Paracosm</strong> được thể hiện thông qua thông điệp chính mà tụi mình thường hay truyền tải, 4
                        <strong> “con chữ vàng”</strong> cho toàn bộ hướng đi của Paracosm đó chính là
                        <strong> “TRUYỀN LỬA ƯỚC MƠ”</strong>.
                    </p>

                    <p className='text-justify'>
                        Với Paracosm, mỗi bạn nhỏ đều mang trong mình một ngọn lửa – đó là những ước mơ trong veo, những niềm vui được học, được chơi,
                        được lớn lên giữa yêu thương. Vì thế, các thành viên của Paracosm đều mong muốn được đóng vai thành những ngọn lửa để tiếp tục
                        truyền nó đến những ngọn đuốc ước mơ của các bạn.
                    </p>

                    <p className='text-justify'>
                        Tụi mình tin vào sự sáng tạo và trí tưởng tượng của các em nhỏ, bởi đó là cái nôi của ước mơ. Các sân chơi, buổi đọc sách, lớp vẽ
                        thủ công mà Paracosm tổ chức là không gian để các em được bay bổng theo cách riêng của mình.
                    </p>

                    <p className='text-justify'>
                        Hơn hết thảy, Paracosm giữ vững giá trị trách nhiệm và minh bạch, để mọi đóng góp đều được gửi đến đúng nơi cần nhất, và mỗi người
                        đồng hành đều cảm thấy mình đang góp phần thắp lên một ngọn lửa.
                    </p>

                    <p>
                        Tụi mình tin rằng: khi một ngọn lửa được truyền đi, sẽ có một ước mơ được giữ sáng.
                    </p>
                </div>
            </section>

            <section
                id="chuong-trinh"
                className="min-h-screen bg-[#F78E1E] text-black px-6 lg:px-24 py-10 flex flex-col items-center"
            >
                {/* Tiêu đề */}
                <h1 className="text-4xl font-extrabold text-white font-montserrat mb-10">
                    CHƯƠNG TRÌNH
                </h1>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
                    {programs.map((program, i) => (
                        <div
                            key={i}
                            className="bg-[#FFF7F1] rounded-xl shadow-lg overflow-hidden flex flex-col items-center border border-black"
                        >
                            {/* Khung ảnh có border trắng và đổ bóng */}
                            <div>
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    className="object-cover w-[350px] h-auto rounded"
                                />
                            </div>

                            {/* Nội dung mô tả */}
                            <div className="p-4 text-center w-[300px] min-h-[250px] bg-white rounded-xl shadow-md my-2 mx-4">
                                <div className="flex justify-center my-2">
                                    <Image
                                        src={program.nameImg}
                                        alt={program.title}
                                        className="object-cover w-auto rounded"
                                    />
                                </div>
                                <p className="text-sm text-justify text-black mb-4 leading-relaxed">{program.desc}</p>

                                <button className="px-4 py-1 border border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">
                                    Tìm hiểu thêm
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
