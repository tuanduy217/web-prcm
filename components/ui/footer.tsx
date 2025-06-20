"use client";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#fef6f0] text-black px-4 py-8 border-t-2 border-orange-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                {/* Về tụi mình */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Về tụi mình</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Giới thiệu chung</a></li>
                        <li><a href="#" className="hover:underline">Các dự án</a></li>
                        <li><a href="#" className="hover:underline">Phóng sự chương trình</a></li>
                    </ul>
                </div>

                {/* Theo dõi tụi mình */}
                <div className="text-center">
                    <h3 className="font-bold text-lg mb-4">Theo dõi tụi mình tại</h3>
                    <div className="flex justify-center space-x-6 text-2xl">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="Tiktok" className="hover:text-black">
                            <FaTiktok />
                        </a>
                    </div>
                </div>

                {/* Liên hệ */}
                <div className="text-right">
                    <h3 className="font-bold text-lg mb-2">Liên hệ</h3>
                    <p className="mb-1">(+84) 522 944 350</p>
                    <p>paracosm.keeper@gmail.com</p>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="mt-6 text-center text-orange-400 font-bold text-sm">
                ©Paracosm – Ignite the light
            </div>
        </footer>
    );
};

export default Footer;
